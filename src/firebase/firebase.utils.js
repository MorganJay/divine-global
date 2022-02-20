import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCv3Gi49RX_W7WRVSmK2RKPzDYPobJj2Y",
  authDomain: "divine-global-db.firebaseapp.com",
  projectId: "divine-global-db",
  storageBucket: "divine-global-db.appspot.com",
  messagingSenderId: "589270828727",
  appId: "1:589270828727:web:57177b36b06f3c2f0d2f32",
  measurementId: "G-0PLYEFWBKN",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // document Reference object
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const collectionRef = firestore.collection("users");

  // document SnapShot object
  const snapshot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

