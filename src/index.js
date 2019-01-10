import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import NavBar from './NavBar';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
        <NavBar />
        <App />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root'));
