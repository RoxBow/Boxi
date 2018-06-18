import { SET_LIST_SERVICE } from './action';

const serviceReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LIST_SERVICE:
      return {
        ...state,
        listService: action.listService
      };
    default:
      return state;
  }
};

export default serviceReducer;
