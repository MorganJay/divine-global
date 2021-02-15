import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCv3Gi49RX_W7WRVSmK2RKPzDYPobJj2Y',
  authDomain: 'divine-global-db.firebaseapp.com',
  projectId: 'divine-global-db',
  storageBucket: 'divine-global-db.appspot.com',
  messagingSenderId: '589270828727',
  appId: '1:589270828727:web:57177b36b06f3c2f0d2f32',
  measurementId: 'G-0PLYEFWBKN',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // document Reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // document SnapShot
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create data if data isn't available at that the reference

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
