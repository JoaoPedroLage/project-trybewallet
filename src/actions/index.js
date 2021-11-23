export const INPUT_EMAIL = 'INPUT_EMAIL';
export const DATA_WALLET = 'DATA_WALLET';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

export const dataWallet = (payload) => ({
  type: DATA_WALLET,
  payload,
});
