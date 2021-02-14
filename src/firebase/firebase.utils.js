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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
