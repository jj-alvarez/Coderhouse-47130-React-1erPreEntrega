import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQJIPbtpZHzSawRrmHFgEDaqj8bdCHMDk",
  authDomain: "coderhouse-jjalvarez.firebaseapp.com",
  projectId: "coderhouse-jjalvarez",
  storageBucket: "coderhouse-jjalvarez.appspot.com",
  messagingSenderId: "601464615887",
  appId: "1:601464615887:web:65c59b44e349df819d58ba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);