// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_DATA, EXPENSES_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_DATA:
    return {
      ...state, currencies: action.payload,
    };
  case EXPENSES_DATA:
    return {
      ...state, expenses: action.payload,
    };
  default: return state;
  }
};

export default walletReducer;
