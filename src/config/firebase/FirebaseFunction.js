// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJpwu-jX3fTwVs5sKOjbSUxMcZsu7LGls",
  authDomain: "react-d4561.firebaseapp.com",
  projectId: "react-d4561",
  storageBucket: "react-d4561.appspot.com",
  messagingSenderId: "252551978057",
  appId: "1:252551978057:web:b372ea60f291750563b398",
  measurementId: "G-4HYE0NG8F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app }; // Ensure auth and db are exported
