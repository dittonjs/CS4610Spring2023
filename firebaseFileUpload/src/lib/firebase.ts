// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdaf_TKJ4q0yptg3TWPRmb679i_CvPE04",
  authDomain: "chat-a77e5.firebaseapp.com",
  projectId: "chat-a77e5",
  storageBucket: "chat-a77e5.appspot.com",
  messagingSenderId: "473556694174",
  appId: "1:473556694174:web:f7477c7f1ebab88810778f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
