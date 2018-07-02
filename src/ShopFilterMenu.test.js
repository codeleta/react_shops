import React from 'react';
import ReactDOM from 'react-dom';
import ShopFilterMenu from './ShopFilterMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let cpa = {min: 0, max: 90};
  ReactDOM.render(<ShopFilterMenu
    search_query=''
    categories=''
    category=''
    cpa={cpa}
    rating=''
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
