import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import ShopFilter from './ShopFilter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShopFilter />, document.getElementById('root'));
registerServiceWorker();
