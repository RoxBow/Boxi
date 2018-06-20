import { SET_COMPANY, SET_VALID_COMPANY } from './action';

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        info: action.company,
        stepEmployee: true
      };
    case SET_VALID_COMPANY:
      return {
        ...state,
        companyValid: true
      };
    default:
      return state;
  }
};

export default companyReducer;
