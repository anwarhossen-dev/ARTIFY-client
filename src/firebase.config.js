// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTkc99FFGEJAhzULGx3hc8MJJQ5LP315E",
  authDomain: "artify-6bb1b.firebaseapp.com",
  projectId: "artify-6bb1b",
  storageBucket: "artify-6bb1b.firebasestorage.app",
  messagingSenderId: "194000581797",
  appId: "1:194000581797:web:c2d57beccc13acdb97c94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);