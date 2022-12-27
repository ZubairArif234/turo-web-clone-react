
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBEyv3VRNe726Q5vkBDXC7e3E3b9wACaFM",
  authDomain: "react-3cb95.firebaseapp.com",
  projectId: "react-3cb95",
  storageBucket: "react-3cb95.appspot.com",
  messagingSenderId: "13509271683",
  appId: "1:13509271683:web:eae6ae8fc24c509cbd3bb6"
  };

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase)
  const db = getFirestore(firebase)
export{auth,db} ; 