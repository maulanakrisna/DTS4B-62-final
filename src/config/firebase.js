import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdxr_mpvVTZ4bsV1Or0-OpTMxHmzNz-04",
  authDomain: "dts4b-62-final.firebaseapp.com",
  projectId: "dts4b-62-final",
  storageBucket: "dts4b-62-final.appspot.com",
  messagingSenderId: "386494421356",
  appId: "1:386494421356:web:b78142c1555c608713bb49",
  measurementId: "G-DT82N721ZR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};