import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const config = {
    apiKey: "AIzaSyBKJpiFFBNdA_qeg82VYo9dKjw2ilvJMBw",
    authDomain: "shop-db-a5436.firebaseapp.com",
    projectId: "shop-db-a5436",
    storageBucket: "shop-db-a5436.appspot.com",
    messagingSenderId: "301506702483",
    appId: "1:301506702483:web:e0002638236e8a54f0f166"
};


export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
