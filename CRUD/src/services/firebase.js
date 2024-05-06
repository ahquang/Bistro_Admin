// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9ndKW1ZgfbVNcuxGFDsdw02GGNPkz4g",
  authDomain: "final-project-vmo.firebaseapp.com",
  projectId: "final-project-vmo",
  storageBucket: "final-project-vmo.appspot.com",
  messagingSenderId: "503585732763",
  appId: "1:503585732763:web:31531c54b585ad1e552e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;