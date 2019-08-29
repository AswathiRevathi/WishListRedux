import { createStore, combineReducers } from 'redux';
import wishReducer from './reducers/wishReducer';
import wishListReducer from './reducers/wishListReducer';


const rootReducer = combineReducers({
  products: wishReducer,
  wishList:wishListReducer
  });
  
  const configureStore = () => {
    return createStore(rootReducer);
  }
  
  export default configureStore;
