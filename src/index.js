import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';

/*
  Template Components
 */
import './assets/styles/styles.css';
import App from './components/pages/App';
import BreedsList from './components/templates/BreedsList';
import BreedDetails from './components/templates/BreedDetails';
/*
  Images for webpack loading
 */

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path='/' component={BreedsList} exact />
        <Route path='/details' component={BreedDetails} />
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector('#app')
);
