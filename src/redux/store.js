import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";

import rootSaga from "./root.saga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const storeObject = { store, persistor };

export default storeObject;
