// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1pXlH_myAcQGi5-QBkgLvG6uT6MLOLGk",
  authDomain: "painting-and-drawing-2f67c.firebaseapp.com",
  projectId: "painting-and-drawing-2f67c",
  storageBucket: "painting-and-drawing-2f67c.appspot.com",
  messagingSenderId: "690279824665",
  appId: "1:690279824665:web:cdd85d3422dd3d53d71988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;


