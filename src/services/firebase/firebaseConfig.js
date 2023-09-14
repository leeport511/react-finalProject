// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8cNy1m1gieKg2mu9cJcKLeAKZL7f2z64",
  authDomain: "react-coder-fp.firebaseapp.com",
  projectId: "react-coder-fp",
  storageBucket: "react-coder-fp.appspot.com",
  messagingSenderId: "605889332368",
  appId: "1:605889332368:web:e8caf265cda8c602764415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

