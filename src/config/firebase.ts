// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulrZTzDDoE5t9uSn4WwpheF3Oa6Q2AJE",
  authDomain: "react-course-87739.firebaseapp.com",
  projectId: "react-course-87739",
  storageBucket: "react-course-87739.appspot.com",
  messagingSenderId: "109267191947",
  appId: "1:109267191947:web:c09900255645fd4b21ec8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
