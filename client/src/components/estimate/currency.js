import React from 'react';
import PropTypes from 'prop-types';
import './estimate.css';

const Currency = props => {
  return(
    <div>
      <p>
        <input 
          type='text' 
          name='currencyType'
          className='estimate-input' 
          value='USD' 
          readOnly>
        </input>
      </p>
      <input 
        type='number' 
        name='currency'
        id='currency-input'
        className='estimate-input'
        placeholder='Enter your amount' 
        onChange={props.onChange}
        value={props.value}
        step='0.01'
      />
    </div>
  );
}

Currency.propTypes = {
  value: PropTypes.number
}

export default Currency;