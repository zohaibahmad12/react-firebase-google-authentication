// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZsCvNiTKBxJ_4Kl7YdcQFsKKjMKFuD2w",
  authDomain: "first-react-project-95a8c.firebaseapp.com",
  projectId: "first-react-project-95a8c",
  storageBucket: "first-react-project-95a8c.appspot.com",
  messagingSenderId: "199067352432",
  appId: "1:199067352432:web:14139ea86d1976eb9d63b5",
  databaseURL:"https://first-react-project-95a8c-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);