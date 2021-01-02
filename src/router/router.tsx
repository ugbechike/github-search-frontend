import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Search } from "../pages/search";
import '../index.css';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/"} component={Search} />
        </Switch>
      </Router>
    </div>
  );
};
