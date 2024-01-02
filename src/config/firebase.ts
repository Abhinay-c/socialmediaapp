// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7OuCuWTCQzIRL-57pesr7a0NG7xvJMJg",
    authDomain: "socialmediaapp-76b1d.firebaseapp.com",
    projectId: "socialmediaapp-76b1d",
    storageBucket: "socialmediaapp-76b1d.appspot.com",
    messagingSenderId: "1069436247436",
    appId: "1:1069436247436:web:c219442a8ab7c50026caa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);