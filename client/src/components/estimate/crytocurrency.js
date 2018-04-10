import React from 'react';
import PropTypes from 'prop-types';

const CryptoCurrency = props => {
  return(
    <div>
      <p>
        <input 
          type='text' 
          name='cryptoCurrencyType'
          className='estimate-input'
          value='BTC' 
          readOnly>
        </input>
      </p>
      
      <input
        type='number'
        name='cryptoCurrency'
        className='estimate-input'
        placeholder='Diplay Quote'
        value={props.value || ''}
        step='0.00000001'
        readOnly
      />
    </div>
  );
}

CryptoCurrency.propTypes = {
  value:PropTypes.number
}

export default CryptoCurrency;