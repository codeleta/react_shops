import React from 'react';
import ReactDOM from 'react-dom';
import ShopFilterResults from './ShopFilterResults';

import shops from './_ShopFilterData'

it('renders without crashing', () => {
  const div = document.createElement('div');
  let cpa = {min: 0, max: 90};
  ReactDOM.render(<ShopFilterResults
    shops={shops}
    search_query=''
    category=''
    cpa={cpa}
    rating=''
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
