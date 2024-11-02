import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { loadingProfile, setProfile } from "./userSlice";

export const startNewProfile = ({ email, name, illness, gender, age, uid }) => {
    return async (dispatch, getState) => {
        dispatch(loadingProfile());
        
        const newProfile = { 
            email,
            name,
            illness,
            gender,
            age
        };

        const profileRef = collection(FirebaseDB, `profile/`);

        await setDoc(doc(profileRef, `${uid}`), newProfile);

        dispatch(setProfile(newProfile));

        const exercisesRef = collection(FirebaseDB, 'exercises/');
        await setDoc(doc(exercisesRef, `${uid}`), {});
        
        const diagnosticsRef = collection(FirebaseDB, 'diagnostics/');
        await setDoc(doc(diagnosticsRef, `${uid}`), {});
    };
};