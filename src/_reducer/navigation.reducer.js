import {navigationConstants} from '../_constants';

const initialState = {
  tab: null,
};

export const navigation = (state = initialState, action) => {
  switch (action.type) {
    case navigationConstants.TAB_SETUP:
      return {
        ...state,
        tab: action.name,
      };

    default:
      return state;
  }
};
