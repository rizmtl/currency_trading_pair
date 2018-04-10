import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../components/balance/balance';

const defaultBalance = {
  currency: 156.12,
  cryptoCurrency: '0.00000000'
}

describe('Balance', () => {
  const wrapper = shallow(<Balance balance={defaultBalance} />);
  it('Should have a header', () => {
    expect(wrapper.find('.balance-header').exists()).toEqual(true);
  });

  it('Should show default balance in USD', () => {
    const usdBalance = `USD: ${defaultBalance.currency}`;
    expect(wrapper.find('p').at(1).text().trim()).toEqual(usdBalance);
  });
  
  it('Should show default balance in BTC', () => {
    const btcBalance = `BTC: ${defaultBalance.cryptoCurrency}`;
    expect(wrapper.find('p').at(2).text().trim()).toEqual(btcBalance);
  });
}); 