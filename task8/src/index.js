import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './Home';
import Info from './Info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/view/:sid">
          <Info />
        </Route>
        <Route path="*"><div>404</div></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

