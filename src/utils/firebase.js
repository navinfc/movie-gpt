// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvBqHNUUSlvpBm6PwxIPYp8Ndbvo6XzYc",
  authDomain: "netflix-gpt-a6d83.firebaseapp.com",
  projectId: "netflix-gpt-a6d83",
  storageBucket: "netflix-gpt-a6d83.appspot.com",
  messagingSenderId: "661030075028",
  appId: "1:661030075028:web:4d4d49216cca5bfd48d281",
  measurementId: "G-Q8ME87K3X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();