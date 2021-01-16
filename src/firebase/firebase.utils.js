import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyANDD4JEqiFMNFSoX3M02Ff5MmEdjZPWR0",
  authDomain: "lit-shop-b0ba2.firebaseapp.com",
  databaseURL: "https://lit-shop-b0ba2.firebaseio.com",
  projectId: "lit-shop-b0ba2",
  storageBucket: "lit-shop-b0ba2.appspot.com",
  messagingSenderId: "184689238762",
  appId: "1:184689238762:web:fbc1ebba6fba5f0697ad93",
  measurementId: "G-16FQ9TPVV0"
};

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
