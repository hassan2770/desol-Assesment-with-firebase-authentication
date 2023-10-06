import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAoLX14kHkyKWrIyilejmWkhp_MoTwCv14",
  authDomain: "desol-test-13388.firebaseapp.com",
  projectId: "desol-test-13388",
  storageBucket: "desol-test-13388.appspot.com",
  messagingSenderId: "334410235057",
  appId: "1:334410235057:web:7cbe357a09bbfd78ba3690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth =getAuth()

export const db = getFirestore(app)
