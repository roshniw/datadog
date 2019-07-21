import React from 'react';
import HomePage from '../home/index.js';
import Feeds from '../feeds/index.js';
import Testing from '../testing/index.js';
import DataAcquisition from '../data-grid/index.js';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'

const DataDogRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route exact path={"/dashboard"} component={DataAcquisition} />
        <Route exact path={"/feeds"} component={Feeds} />
        <Route exact path={"/testing"} component={Testing} />
        </Switch>
      </div>
    </Router>
  );
}

export default DataDogRouter;
