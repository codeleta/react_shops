import React from 'react';
import ReactDOM from 'react-dom';
import ShopFilter from './ShopFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShopFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
