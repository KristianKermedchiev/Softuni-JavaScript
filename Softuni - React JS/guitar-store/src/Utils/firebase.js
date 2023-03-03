import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJbPl9XbDFMoqVDO0Nkxp7cuYyedhUrns",
  authDomain: "guitar-store-b5a07.firebaseapp.com",
  projectId: "guitar-store-b5a07",
  storageBucket: "guitar-store-b5a07.appspot.com",
  messagingSenderId: "441271845122",
  appId: "1:441271845122:web:5c59f38d82f23c4981c21b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;