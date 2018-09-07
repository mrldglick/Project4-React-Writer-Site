import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma/css/bulma.css'; // Needs to change when Heroku-ing
import './scss/style.scss';

// Components


//
class App extends React.Component {
  render() {
    return (

      
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
