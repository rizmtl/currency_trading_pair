import React, { Component } from 'react';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import Currency from './currency';
import CryptoCurrency from './crytocurrency';
import { getLastPrice, getEstimate, resetEstimate } from '../../actions/estimateActions';
import './estimate.css';

class Estimate extends Component {
  componentWillMount = () => {
    this.props.getLastPrice();
  }

  onChange = (e) => {
    let value = parseFloat(e.target.value);

    if (isNaN(value)) {
      this.props.resetEstimate();
    }
    
    if (value <= this.props.balance.currency) {
      this.props.getEstimate(e.target.name, value);
    }
  }

  render = () => {
    return(
      <div>
        <p className='estimate-header'> Trade </p>
        <Currency 
          onChange={this.onChange}
          value={this.props.estimate.currency}
        />
        <p className='estimate-header'> For </p>
        <CryptoCurrency
          value={this.props.estimate.cryptoCurrency}
        />
      </div>
    );
  }
}

Estimate.propTypes = {
  getLastPrice: PropTypes.func.isRequired,
  getEstimate: PropTypes.func.isRequired,
  resetEstimate: PropTypes.func.isRequired,
  onChange: PropTypes.func
};

const mapStateToProps = state => ({
  estimate: state.estimate,
  balance: state.balance
});

export default connect(mapStateToProps, { getLastPrice, getEstimate, resetEstimate })(Estimate);
