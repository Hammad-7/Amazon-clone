// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCAOw_bnRgw_FJTaReFoOCK0fFUkhG88cw",
  authDomain: "challenge-ea1ba.firebaseapp.com",
  projectId: "challenge-ea1ba",
  storageBucket: "challenge-ea1ba.appspot.com",
  messagingSenderId: "627774967866",
  appId: "1:627774967866:web:f2609e04533ee829862503",
  measurementId: "G-31JQMPXMLG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}