// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD50uqCfnMPnEXQlMEsShy4PjtR9JQe4mY",
  authDomain: "videocaller-fbab4.firebaseapp.com",
  projectId: "videocaller-fbab4",
  storageBucket: "videocaller-fbab4.appspot.com",
  messagingSenderId: "512507498641",
  appId: "1:512507498641:web:d987be198ac8401ea4ef30",
  measurementId: "G-9FLTDS1V7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);