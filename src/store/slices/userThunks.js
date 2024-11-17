import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { deleteFailedAudio, loadingProfile, setDiagnostics, setFailedAudio, setFailedAudios, setNameGender, setProfile, setTrabalenguasExercise } from "./userSlice";
import { set } from "lodash";

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

export const startUpdateProfile = ({ name, gender }) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const profileRef = doc(FirebaseDB, `profile/${uid}`);
        await setDoc(profileRef, { name, gender }, { merge: true });
        dispatch(setNameGender({
            name, gender
        }));
    };
};

export const startSaveTrackExercises = (exercise) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { exercisesDone } = getState().user;
        const exercisesRef = doc(FirebaseDB, `exercises/${uid}`);
        // console.log(exercisesRef, exercise, exercisesDone);
        
        await setDoc(exercisesRef, { ...exercisesDone,
            [exercise.name]: {
                maxLevel: exercise.maxLevel,
                percentage: exercise.percentage
            }
         }, { merge: true });
        dispatch(setTrabalenguasExercise(exercise));
    };
}

export const startSaveDiagnostics = (diagnostic) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { diagnostics } = getState().user;
        const diagnosticsRef = doc(FirebaseDB, `diagnostics/${uid}`);
        await setDoc(diagnosticsRef, { ...diagnostics, 
            [diagnostic.date]: diagnostic
        }, { merge: true });
        dispatch(setDiagnostics(diagnostic));
    }
}

export const startSaveStreakDays = () => {
    return async (dispatch, getState) => {
        const { auth, streakDays } = getState();
        const { uid } = auth;
        const { streak, days } = streakDays;
        
        const streakDaysRef = doc(FirebaseDB, `streakDays/${uid}`);
        await setDoc(streakDaysRef, {
            streak,
            days
        });
    };
}

export const startSaveFailedAudios = (failedAudio) => {
    return async (dispatch, getState) => {
        const { auth, user } = getState();
        const { uid } = auth;
        const { failedAudios } = user;

        const today = new Date().toLocaleString();
        
        const failedAudiosRef = doc(FirebaseDB, `failedAudios/${uid}`);
        dispatch(setFailedAudio({ ...failedAudio, ['date']: today }));
        await setDoc(failedAudiosRef, { ...failedAudios, [failedAudio.url.split('/').pop().split('.').shift()]: { ...failedAudio, ['date']: today } });
    }
};

export const startDeleteFailedAudio = (audio) => {
    return async (dispatch, getState) => {
        const { auth, user } = getState();
        const { uid } = auth;
        const { failedAudios } = user;
        const { [audio]: value, ...rest } = failedAudios;
        const failedAudiosRef = doc(FirebaseDB, `failedAudios/${uid}`);
        dispatch(deleteFailedAudio(audio));
        await setDoc(failedAudiosRef, { ...rest });
    }
}