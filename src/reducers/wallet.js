// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DATA_WALLET } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    totalExpenses: 0,
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DATA_WALLET:
    return {
      ...state, totalExpenses: action.payload,
    };
  default: return state;
  }
};

export default walletReducer;
