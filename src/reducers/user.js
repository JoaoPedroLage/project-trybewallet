// foi usado como base para essa página o código do esquenta do dia 19/11

// Esse reducer será responsável por tratar as informações da pessoa usuária
import { INPUT_EMAIL } from '../actions';

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

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_EMAIL:
    return {
      ...state, email: action.payload,
    };
  default: return state;
  }
};

export default emailReducer;
