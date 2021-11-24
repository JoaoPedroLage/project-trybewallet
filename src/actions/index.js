export const INPUT_EMAIL = 'INPUT_EMAIL';
export const DATA_WALLET = 'DATA_WALLET';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

export const dataWallet = (payload) => ({
  type: DATA_WALLET,
  payload,
});

export const receiveData = (payload) => ({
  type: RECEIVE_DATA,
  payload,
});

export const requestAPI = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(receiveData(data));
};
