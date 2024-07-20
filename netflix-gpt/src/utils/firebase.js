// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJMLWVIQuu1mF9Q3Qog8E-jEOkL-jsNT8",
  authDomain: "netflixgpt-87702.firebaseapp.com",
  projectId: "netflixgpt-87702",
  storageBucket: "netflixgpt-87702.appspot.com",
  messagingSenderId: "847139478506",
  appId: "1:847139478506:web:07df8d46ec1324d9877093",
  measurementId: "G-VXFWJJ9LFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();