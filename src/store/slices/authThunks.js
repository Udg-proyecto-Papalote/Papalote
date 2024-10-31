import {
    getAuth,
    reauthenticateWithCredential,
    updateEmail,
    updateProfile,
    EmailAuthProvider,
    OAuthProvider,
    reauthenticateWithPopup,
} from "firebase/auth";
import {
    logInWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/providers";
// import { loadProfile } from "../../../helpers/loadProfile";
// import { loadingProfile, setProfile } from "../profile/profileSlice";
// import { startUpdateProfile } from "../profile/thunks";
// import { clearPeople } from "../profiles/peopleSlice";
// import { clearStatePublications } from "../publications/publicationsSlice";
import { checkingCredentials, login, logout, setError } from "./authSlice";

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
            // dispatch(setProfile({ type: null, displayName, photoURL, uid, voted_type: null, publications: [] }));
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

export const startLogOut = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(
            setProfile({
                type: null,
                displayName: null,
                photoURL: null,
                uid: null,
                voted_type: null,
                id: null,
            })
        );
        dispatch(
            logout({
                errorMessage: "",
            })
        );
        dispatch(clearPeople());
        dispatch(clearStatePublications());
    };
};

// export const startUpdateUser = ({ displayName, photoURL, type, password }) => {
//     return async (dispatch, getState) => {
//         const auth = getAuth();
//         const {
//             uid,
//             displayName: oldDisplayName,
//             photoURL: oldPhotoURL,
//             email,
//         } = getState().auth;

//         const user = auth.currentUser;
//         //Google user
//         if (user.providerData[0].providerId === "google.com") {
//             if (displayName !== oldDisplayName || photoURL !== oldPhotoURL) {
//                 try {
//                     const provider = new OAuthProvider("google.com");

//                     reauthenticateWithPopup(user, provider).then(async () => {
//                         await updateProfile(auth.currentUser, {
//                             displayName,
//                             photoURL,
//                         });

//                         dispatch(
//                             startUpdateProfile({
//                                 displayName,
//                                 type,
//                                 photoURL,
//                             })
//                         );
//                         const profile = getState().profile;
//                         dispatch(setProfile(profile));

//                         dispatch(
//                             login({
//                                 displayName,
//                                 photoURL,
//                                 uid,
//                                 email,
//                             })
//                         );
//                     });
//                 } catch (error) {
//                     dispatch(setError(error.message));
//                 }
//             }
//         } else {
//             if (displayName !== oldDisplayName || photoURL !== oldPhotoURL) {
//                 try {
//                     const credential = EmailAuthProvider.credential(
//                         email,
//                         password
//                     );

//                     dispatch(checkingCredentials());
//                     reauthenticateWithCredential(auth.currentUser, credential)
//                         .then(async () => {
//                             await updateProfile(auth.currentUser, {
//                                 displayName,
//                                 photoURL,
//                             });

//                             dispatch(
//                                 startUpdateProfile({
//                                     displayName,
//                                     type,
//                                     photoURL,
//                                 })
//                             );
//                             const profile = getState().profile;
//                             dispatch(setProfile(profile));

//                             dispatch(
//                                 login({
//                                     displayName,
//                                     photoURL,
//                                     uid,
//                                     email,
//                                 })
//                             );
//                         })
//                         .catch((error) => {
//                             console.log(error);

//                             dispatch(
//                                 login({
//                                     uid,
//                                     email,
//                                     displayName: oldDisplayName,
//                                     photoURL: oldPhotoURL,
//                                 })
//                             );
//                             dispatch(
//                                 setProfile({
//                                     type,
//                                     displayName: oldDisplayName,
//                                     photoURL: oldPhotoURL,
//                                     uid,
//                                     type,
//                                     voted_type: null,
//                                 })
//                             );
//                             dispatch(
//                                 setError({
//                                     errorMessage: error.message,
//                                 })
//                             );
//                         });
//                 } catch (error) {
//                     console.log(error);

//                     dispatch(
//                         login({
//                             uid,
//                             email,
//                             displayName: oldDisplayName,
//                             photoURL: oldPhotoURL,
//                         })
//                     );
//                     dispatch(
//                         setProfile({
//                             type,
//                             displayName: oldDisplayName,
//                             photoURL: oldPhotoURL,
//                             uid,
//                             voted_type: null,
//                         })
//                     );
//                     dispatch(
//                         setError({
//                             errorMessage: error.message,
//                         })
//                     );
//                 }
//             }
//         }
//     };
// };