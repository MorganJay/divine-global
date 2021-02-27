import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer';


// * what's this for again 😂
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
};

// oh i remember a bit

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer, 
  shop: shopReducer
});
  
export default persistReducer(persistConfig, rootReducer);
