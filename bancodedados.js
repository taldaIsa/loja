import firebase from "firebase"
require ("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyApARnTmHSX71ofA7iSPGSGhG_Ill9Fcpk",
    authDomain: "loja-cigarra.firebaseapp.com",
    projectId: "loja-cigarra",
    storageBucket: "loja-cigarra.appspot.com",
    messagingSenderId: "28022064498",
    appId: "1:28022064498:web:55ee16624c4a61970789eb"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()