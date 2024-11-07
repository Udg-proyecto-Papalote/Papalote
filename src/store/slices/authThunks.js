import { doc, getDoc } from "firebase/firestore";
import {
    logInWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { clearUser, loadingProfile, setAllDiagnostics, setExercises, setProfile } from "./userSlice";
import { startNewProfile } from "./userThunks";
import { FirebaseDB } from "../../firebase/config";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (result.ok) {
            const { uid, email, displayName, photoURL } = result;
            dispatch(login({ uid, email, displayName, photoURL }));

            dispatch(loadingProfile());
            const profile = await loadProfile(uid);

            dispatch(setProfile(profile));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

export const startCreateUserWithEmailAndPassword = ({
    email,
    password,
    displayName,
    illness,
    gender,
    age
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailAndPassword({
            email,
            password,
            displayName,
        });

        if (result.ok) {
            const { uid, email, displayName } = result;
            dispatch(login({ uid, email, displayName }));
            dispatch(startNewProfile({ 
                email, name: displayName,
                illness,
                gender,
                age,
                uid
            }));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

export const startLogInWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await logInWithEmailAndPassword({
            email,
            password,
        });

        if (result.ok) {
            const { uid, email, displayName } = result;
            dispatch(login({ uid, email, displayName }));

            dispatch(loadingProfile());
            const profile = await loadProfile(uid);
            
            const exercises = await loadExercises(uid);
            dispatch(setExercises(exercises));

            const diagnostics = await loadDiagnostics(uid);
            dispatch(setAllDiagnostics(diagnostics));

            dispatch(setProfile(profile));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

const loadProfile = async (uid) => {
    const profileRef = doc(FirebaseDB, `profile/${uid}`);

    const docSnap = await getDoc(profileRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return { 
            email: "",
            name: "",
            illness: false,
            gender: "",
            age: ""
        };
    }
};

const loadExercises = async (uid) => {
    const exercisesRef = doc(FirebaseDB, `exercises/${uid}`);
    const docSnap = await getDoc(exercisesRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
}

const loadDiagnostics = async (uid) => {
    const diagnosticsRef = doc(FirebaseDB, `diagnostics/${uid}`);
    const docSnap = await getDoc(diagnosticsRef);

    if (docSnap.exists()) {
        console.log(docSnap.data(), { ...docSnap.data() });
        
        return { ...docSnap.data() };
    } else {
        return {};
    }
}

export const startLogOut = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(
            logout({
                errorMessage: "",
            })
        );
        dispatch(clearUser());
    };
};