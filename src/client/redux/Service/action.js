import axios from 'axios';

export const SET_LIST_SERVICE = 'SET_LIST_SERVICE';

export const fetchService = () => {
  return dispatch => {
    axios
      .get('/service/getListService')
      .then(res => {
        dispatch(setListService(res.data.listService));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setListService = listService => ({
  type: SET_LIST_SERVICE,
  listService
});
