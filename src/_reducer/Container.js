import {combineReducers} from 'redux';
import {userAuth} from './user.auth.reducer';
import {navigation} from './navigation.reducer';

const rootReducer = combineReducers({
  userAuth,
  navigation,
});

export default rootReducer;
