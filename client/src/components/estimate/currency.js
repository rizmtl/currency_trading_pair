import React from 'react';
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
        className='estimate-input'
        placeholder='Enter your amount' 
        onChange={props.onChange}
        onClick={props.onClick}
        value={props.value}
        step='0.01'
      />
    </div>
  );
}

export default Currency;