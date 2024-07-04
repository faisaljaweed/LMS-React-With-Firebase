import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBF8qP5h12DWlbYnhDx43Ip1q0KKIrHQ0U",
    authDomain: "lms-e9162.firebaseapp.com",
    projectId: "lms-e9162",
    storageBucket: "lms-e9162.appspot.com",
    messagingSenderId: "320311933812",
    appId: "1:320311933812:web:225f3913ea69f6323e4a21"
  };
 const app=initializeApp(firebaseConfig);
 const database=getDatabase(app);
 export {app,database};