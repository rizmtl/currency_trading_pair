import { UPDATE_BALANCE, GET_BALANCE } from '../actions/balanceActions';

const initialState = {
  currency: 156.12,
  cryptoCurrency: '0.00000000'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BALANCE:
      const expense = action.payload;
      const newCurrency = parseFloat(state.currency) - expense.currency;
      const newCryptoCurrency = parseFloat(state.cryptoCurrency) + expense.cryptoCurrency;
      
      return {
        ...state,
        currency: newCurrency.toFixed(2),
        cryptoCurrency: newCryptoCurrency.toFixed(8)
      }
    case GET_BALANCE:
      return state;

    default:
      return state;
  }
}