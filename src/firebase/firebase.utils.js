import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBKJpiFFBNdA_qeg82VYo9dKjw2ilvJMBw",
    authDomain: "shop-db-a5436.firebaseapp.com",
    projectId: "shop-db-a5436",
    storageBucket: "shop-db-a5436.appspot.com",
    messagingSenderId: "301506702483",
    appId: "1:301506702483:web:e0002638236e8a54f0f166"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;