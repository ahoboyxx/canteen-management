import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyA-2HP0RlJXaqnPzythLgcnK4fJ4ZBZhdQ",
  authDomain: "canteen-management-60c07.firebaseapp.com",
  databaseURL: "https://canteen-management-60c07-default-rtdb.firebaseio.com/", 
  projectId: "canteen-management-60c07",
  storageBucket: "canteen-management-60c07.appspot.com", // Corrected .app to .appspot.com
  messagingSenderId: "551199573609",
  appId: "1:551199573609:web:9b6184a400eefcc10884f8",
  measurementId: "G-KK5P28CK8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
