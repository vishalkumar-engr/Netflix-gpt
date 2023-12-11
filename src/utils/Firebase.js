// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1CzCid_ja0evks0qj-mAq55gj6FUap4",
  authDomain: "netflixgpt9632.firebaseapp.com",
  projectId: "netflixgpt9632",
  storageBucket: "netflixgpt9632.appspot.com",
  messagingSenderId: "913679869063",
  appId: "1:913679869063:web:288677ae44f49a14760422",
  measurementId: "G-84SN016HVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
