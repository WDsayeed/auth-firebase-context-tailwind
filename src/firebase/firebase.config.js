// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj0DFEWvFtX7Z5B92wN9z5ybqjKoL2K5c",
  authDomain: "auth-firebase-context-ta-a5cd4.firebaseapp.com",
  projectId: "auth-firebase-context-ta-a5cd4",
  storageBucket: "auth-firebase-context-ta-a5cd4.appspot.com",
  messagingSenderId: "912570712080",
  appId: "1:912570712080:web:eefecc0b11c6ece4a9ca95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app