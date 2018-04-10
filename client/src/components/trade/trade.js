import React, { Component } from 'react';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import Estimate from '../estimate/estimate';
import Balance from '../balance/balance';
import { getBalance, updateBalance } from '../../actions/balanceActions';
import { resetEstimate } from '../../actions/estimateActions';
import './trade.css';

class Trade extends Component {
  componentWillMount = () => {
    this.props.getBalance();
  }

  doTrade = async (e) => {
    e.preventDefault();
    let currency = parseFloat(e.target.elements.currency.value);
    let cryptoCurrency = parseFloat(e.target.elements.cryptoCurrency.value);
    
    if (isNaN(currency) || isNaN(cryptoCurrency)) {
      return;
    }

    if (currency > this.props.balance.currency) {
      return;
    }
    
    let estimate = {
      currency: currency,
      cryptoCurrency: cryptoCurrency
    }
    this.props.updateBalance(estimate);
  }

  render() {
    return(
      <div className='trade'>
        <Balance balance={this.props.balance} />
        <form onSubmit={this.doTrade}>
          <Estimate/>
          <button className='trade-button'> Trade </button>
        </form>
      </div>
    );  
  }
}

Trade.propTypes = {
  getBalance: PropTypes.func.isRequired,
  updateBalance: PropTypes.func.isRequired,
  resetEstimate: PropTypes.func.isRequired,
  balance: PropTypes.object
};

const mapStateToProps = state => ({
  balance: state.balance,
  estimate: state.estimate
})

export default connect(mapStateToProps, 
  { getBalance, updateBalance, resetEstimate })(Trade);