// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DATA_WALLET, RECEIVE_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DATA_WALLET:
  case RECEIVE_DATA:
    return {
      ...state, currencies: action.payload,
    };
  default: return state;
  }
};

export default walletReducer;
