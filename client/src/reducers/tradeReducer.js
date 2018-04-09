import { GET_LAST_PRICE, GET_ESTIMATE, RESET_ESTIMATE } from '../actions/estimateActions';

const initialState = {
  lastPrice: undefined,
  estimate: {
    currency: undefined,
    crptoCurreny: undefined
  }
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
        estimate: {}
      }
    
    case GET_ESTIMATE:
      let estimate;
      if (action.payload.currencyType === 'usd') {
        estimate = {
          usd: action.payload.value,
          btc: action.payload.value/state.lastPrice
        }
      }

      if (action.payload.currencyType === 'btc') {
        estimate = {
          usd: action.payload.value * state.lastPrice,
          btc: action.payload.value
        }
      }
      
      return {
        ...state,
        estimate: estimate
      };

    default:
      return state;
  }
}