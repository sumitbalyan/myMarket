import {navigationConstants} from '../_constants';

const setTab = tab => {
  const success = name => ({type: navigationConstants.TAB_SETUP, name});

  return dispatch => {
    dispatch(success(tab));
  };
};

export const navigationAction = {
  setTab,
};
