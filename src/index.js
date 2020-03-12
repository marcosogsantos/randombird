import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './home';

ReactDOM.render(
<Home/>
, document.getElementById('root'));
serviceWorker.unregister();
