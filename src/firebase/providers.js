import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
        };
    } catch (error) {
        const { code, message } = error;

        return {
            ok: false,
            code,
            message,
        };
    }
};

export const registerUserWithEmailAndPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        const result = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        const { uid } = result.user;

        return {
            ok: true,
            uid,
            email,
            displayName,
            // photoURL,
        };
    } catch (error) {
        const { code, message } = error;

        return {
            ok: false,
            code,
            message,
        };
    }
};

export const logInWithEmailAndPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        const { displayName, photoURL, uid } = result.user;

        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
        };
    } catch (error) {
        const { code, message } = error;

        return {
            ok: false,
            code,
            message,
        };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};