import {userAuthConstant} from '../_constants';

const login = data => {
  const {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE} = userAuthConstant;

  const request = () => ({
    type: SIGN_IN_REQUEST,
  });
  const success = userToken => ({
    type: SIGN_IN_SUCCESS,
    userToken,
  });
  const error = err => ({
    type: SIGN_IN_FAILURE,
    err,
  });

  return dispatch => {
    dispatch(request());
    //TODO: web service call
    dispatch(success({userToken: '1234567890'}));
  };
};
const logout = () => {
  const {SIGN_OUT} = userAuthConstant;
  const logoutMe = () => ({type: SIGN_OUT});
  return dispatch => {
    dispatch(logoutMe());
  };
};
export const userAuthAction = {
  login,
  logout,
};
