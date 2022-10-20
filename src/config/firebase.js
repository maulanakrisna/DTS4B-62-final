// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdxr_mpvVTZ4bsV1Or0-OpTMxHmzNz-04",
  authDomain: "dts4b-62-final.firebaseapp.com",
  projectId: "dts4b-62-final",
  storageBucket: "dts4b-62-final.appspot.com",
  messagingSenderId: "386494421356",
  appId: "1:386494421356:web:b78142c1555c608713bb49",
  measurementId: "G-DT82N721ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};