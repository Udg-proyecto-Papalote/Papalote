import { doc, getDoc, setDoc } from "firebase/firestore";
import {
    logInWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { clearUser, loadingProfile, setAllDiagnostics, setExercises, setFailedAudios, setProfile } from "./userSlice";
import { startNewProfile } from "./userThunks";
import { FirebaseDB } from "../../firebase/config";
import { setStreakDays } from "./streakDaysSlice";

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

            const streakDays = await loadStreakDays(uid);
            dispatch(setStreakDays(streakDays));

            const failedAudios = await loadFailedAudios(uid);
            dispatch(setFailedAudios(failedAudios));

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
        return { ...docSnap.data() };
    } else {
        return {};
    }
}

const loadStreakDays = async (uid) => {
    const streakDaysRef = doc(FirebaseDB, `streakDays/${uid}`);
    const docSnap = await getDoc(streakDaysRef);

    if (docSnap.exists() && docSnap.data().days && docSnap.data().streak) {
        return docSnap.data();
    } else {
        // Create reference to the document
        const streakDaysRef = doc(FirebaseDB, `streakDays/${uid}`);

        // Set the document
        await setDoc(streakDaysRef, {
            streak: 1,
            days: [new Date().toDateString()]
        });
        return {
            streak: 1,
            days: [new Date().toDateString()]
        };
    }
}

const loadFailedAudios = async (uid) => {
    const failedAudiosRef = doc(FirebaseDB, `failedAudios/${uid}`);
    const docSnap = await getDoc(failedAudiosRef);

    if (docSnap.exists()) {
        return docSnap.data();
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
        dispatch(setStreakDays({ streak: 0, days: [] }));
    };
};
