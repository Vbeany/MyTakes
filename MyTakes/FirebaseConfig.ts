// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8F-NOfJ2qmW4Y4D7RdsH_KkLkisL6Jw",
  authDomain: "mytakes-1e702.firebaseapp.com",
  projectId: "mytakes-1e702",
  storageBucket: "mytakes-1e702.appspot.com",
  messagingSenderId: "193625288965",
  appId: "1:193625288965:web:5a3b9a09dca1fbbcc2876c"
};



// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});