export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const GET_BALANCE = 'GET_BALANCE';

export const getBalance = () => dispatch => {
  dispatch({
    type: GET_BALANCE
  });
};

export const updateBalance = (expense) => dispatch => {
  dispatch({
    type: UPDATE_BALANCE,
    payload: expense
  });
};