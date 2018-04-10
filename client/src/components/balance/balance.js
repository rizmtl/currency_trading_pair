import React from 'react';
import PropTypes from 'prop-types';
import './balance.css';

const Balance = props => {
  return(
    <div>
      <p className='balance-header'> Account Balance </p>
      <div className='balance-list'>
        <p> USD: {props.balance.currency}</p>
        <p> BTC: {props.balance.cryptoCurrency}</p>
      </div>
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.object
}

export default Balance;
