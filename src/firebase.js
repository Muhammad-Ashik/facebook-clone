// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBL4k0yBravPJftvyrK_mRs7S-nthlHL1g",
  authDomain: "facebook-clone-62c48.firebaseapp.com",
  projectId: "facebook-clone-62c48",
  storageBucket: "facebook-clone-62c48.appspot.com",
  messagingSenderId: "880464678332",
  appId: "1:880464678332:web:eff43aac31057a2a16afb9",
  measurementId: "G-BHC1XFYRTQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
