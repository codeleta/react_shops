import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './Shop';

import shops from './_ShopFilterData'

it('renders without crashing', () => {
  const div = document.createElement('div');
  let shop = shops[0];
  ReactDOM.render(<Shop shop={shop}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
