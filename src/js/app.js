import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

import '../css/icons.css';
import '../css/app.scss';

import App from '../components/app.jsx';


// Init F7 Vue Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);