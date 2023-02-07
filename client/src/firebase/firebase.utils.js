import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getFirestore,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBCv3Gi49RX_W7WRVSmK2RKPzDYPobJj2Y',
  authDomain: 'divine-global-db.firebaseapp.com',
  projectId: 'divine-global-db',
  storageBucket: 'divine-global-db.appspot.com',
  messagingSenderId: '589270828727',
  appId: '1:589270828727:web:57177b36b06f3c2f0d2f32',
  measurementId: 'G-0PLYEFWBKN',
};

const app = initializeApp(config);

export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // document Reference object
  const userRef = doc(firestore, 'users', userAuth.uid);

  // document SnapShot object
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create data if data isn't available at that the reference
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return snapshot;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // return the transformed collection object as a normalized map
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const getCollectionRef = collectionKey =>
  collection(firestore, collectionKey);

export const getSnapshot = async collectionKey =>
  await getDocs(collection(firestore, collectionKey));

export const addListener = collectionKey => observer =>
  onSnapshot(collection(firestore, collectionKey), observer);
