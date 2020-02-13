import {combineReducers} from 'redux';
import {userAuth} from './user.auth.reducer';

const rootReducer = combineReducers({
  userAuth,
});

export default rootReducer;
