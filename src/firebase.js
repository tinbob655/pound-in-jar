// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export function firebaseInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyAnNHHeKEc2sq3paJKkX9jc6AEj37CGP3U",
      authDomain: "pound-in-jar-f185d.firebaseapp.com",
      projectId: "pound-in-jar-f185d",
      storageBucket: "pound-in-jar-f185d.appspot.com",
      messagingSenderId: "127627936028",
      appId: "1:127627936028:web:bfc2167ec09dd5458dfad9"
    };
    
    // Initialize Firebase
    initializeApp(firebaseConfig);
};