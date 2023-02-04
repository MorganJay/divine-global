import { takeLatest, call, put } from 'redux-saga/effects';
// Listens for every action of a specific type that we pass to it.

import ShopActionTypes from './shop.types';
import {
  convertCollectionsSnapshotToMap,
  getSnapshot,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    // const collectionRef = getCollectionRef("collections");
    const snapshot = yield getSnapshot('collections');
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    // If we get an error, we dispatch the fetchCollectionsFailure action.
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
