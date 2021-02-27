import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "~/views/home/index";
import { Home } from "~/views/home";
import { User } from "~/views/user/index";
import { Layout } from "~/views/Layout";

export function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}
