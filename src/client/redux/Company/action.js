export const SET_COMPANY = 'SET_COMPANY';
export const SET_VALID_COMPANY = 'SET_VALID_COMPANY';

export const setCompany = company => ({
  type: SET_COMPANY,
  company
});

export const setValidCompany = () => ({
  type: SET_VALID_COMPANY
});

