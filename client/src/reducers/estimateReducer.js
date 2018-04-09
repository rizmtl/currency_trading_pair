import { GET_LAST_PRICE, GET_ESTIMATE, RESET_ESTIMATE } from '../actions/estimateActions';

const initialState = {
  lastPrice: undefined,
  currency: undefined,
  cryptoCurrency: undefined
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LAST_PRICE:
      return {
        ...state,
        lastPrice: action.payload
      }
    
    case RESET_ESTIMATE:
      return {
        ...state,
        currency: undefined,
        cryptoCurrency: undefined
      }
    
    case GET_ESTIMATE:
      let currency = action.payload.value;
      let cryptoCurrency;

      if (action.payload.currencyType === 'currency') {
        currency = action.payload.value;
        cryptoCurrency = currency/state.lastPrice;
      }
      
      return {
        ...state,
        currency: currency,
        cryptoCurrency: cryptoCurrency
      };

    default:
      return state;
  }
}