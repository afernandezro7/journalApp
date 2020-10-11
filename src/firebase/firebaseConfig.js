import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2HYzMK-_OtB0NTwmhwSj_QhZIhctlAmg",
  authDomain: "react-app-curso-cc497.firebaseapp.com",
  databaseURL: "https://react-app-curso-cc497.firebaseio.com",
  projectId: "react-app-curso-cc497",
  storageBucket: "react-app-curso-cc497.appspot.com",
  messagingSenderId: "141301289514",
  appId: "1:141301289514:web:033c0b336f7dd1aed62953"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}