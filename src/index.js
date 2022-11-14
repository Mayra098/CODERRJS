import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from '../src/Router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu1sqc4mDjoTpBBfSMm_E9V7Vtg81dVU4",
  authDomain: "ecommerce-3c587.firebaseapp.com",
  projectId: "ecommerce-3c587",
  storageBucket: "ecommerce-3c587.appspot.com",
  messagingSenderId: "331267249658",
  appId: "1:331267249658:web:8bbe13ad1a75c78d9ec043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Router/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 