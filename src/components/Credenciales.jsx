// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore} from "firebase/getFirestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vkmPPBiuFLDznyJrpjRF9x4wx1AsgR4",
  authDomain: "ecommer-28e9b.firebaseapp.com",
  projectId: "ecommer-28e9b",
  storageBucket: "ecommer-28e9b.appspot.com",
  messagingSenderId: "794479766700",
  appId: "1:794479766700:web:e50ed7ca0d820670914309",
  measurementId: "G-39175HE226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)
export const auth = getAuth(app)

export default app;