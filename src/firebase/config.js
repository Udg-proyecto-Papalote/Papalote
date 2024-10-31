// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OgoraEx_GJWRYQXYAY_dXKTPhxIZ_Z4",
  authDomain: "papa-lote.firebaseapp.com",
  projectId: "papa-lote",
  storageBucket: "papa-lote.appspot.com",
  messagingSenderId: "599480516088",
  appId: "1:599480516088:web:dfc94f4c81889c4e6a2a0d"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);