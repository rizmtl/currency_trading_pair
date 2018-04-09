export const GET_LAST_PRICE = 'GET_LAST_PRICE';
export const GET_ESTIMATE = 'GET_ESTIMATE';
export const DO_TRADE = 'DO_TRADE';
export const RESET_ESTIMATE = 'RESET_ESTIMATE';

export const getLastPrice = () => async dispatch => {
  const url = "api/lastprice";
  const apiData = await fetch(url);
  const data = await apiData.json();

  dispatch({
    type: GET_LAST_PRICE,
    payload: data.last_price
  })
};

export const getEstimate = (currencyType, value) => dispatch => {
  dispatch({
    type: GET_ESTIMATE,
    payload: {
      currencyType: currencyType,
      value: value
    }
  })
};

export const doTrade = () => dispatch => {
  dispatch({
    type: DO_TRADE
  })
};

export const resetEstimate = () => dispatch => {
  dispatch({
    type: RESET_ESTIMATE
  })
}