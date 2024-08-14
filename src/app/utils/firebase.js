// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "product-blog-c5d89.firebaseapp.com",
  projectId: "product-blog-c5d89",
  storageBucket: "product-blog-c5d89.appspot.com",
  messagingSenderId: "164257760031",
  appId: "1:164257760031:web:e1d60ad55fd86c7900662a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
