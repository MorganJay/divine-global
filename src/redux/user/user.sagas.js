import { all, takeLatest, put, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { signInSuccess, signInFailure } from './user.actions';

import {
  createUserProfileDocument,
  getCurrentUser,
  signInWithGooglePopup,
  signInWithPassword,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshot = yield call(createUserProfileDocument, userAuth);
    // const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithGooglePopup();
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error.message);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
  ]);
}
