// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJIPbtpZHzSawRrmHFgEDaqj8bdCHMDk",
  authDomain: "coderhouse-jjalvarez.firebaseapp.com",
  projectId: "coderhouse-jjalvarez",
  storageBucket: "coderhouse-jjalvarez.appspot.com",
  messagingSenderId: "601464615887",
  appId: "1:601464615887:web:65c59b44e349df819d58ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);