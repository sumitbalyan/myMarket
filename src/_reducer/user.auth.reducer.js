import {userAuthConstant} from '../_constants';
const initialSatate = {
  isLoading: false,
  isSignout: true,
  userToken: null,
  error: null,
};

export const userAuth = (state = initialSatate, action) => {
  const {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    RESTORE_TOKEN_REQUEST,
    RESTORE_TOKEN_SUCCESS,
    RESTORE_TOKEN_FAILURE,
    SIGN_OUT,
  } = userAuthConstant;

  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSignout: true,
        userToken: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignout: false,
        userToken: action.userToken,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSignout: true,
        userToken: null,
      };
    case RESTORE_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSignout: true,
        userToken: null,
      };
    case RESTORE_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignout: false,
        userToken: action.userToken,
      };
    case RESTORE_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSignout: true,
        userToken: null,
        error: action.err,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoading: false,
        isSignout: true,
        userToken: null,
      };
    default:
      return state;
  }
};
