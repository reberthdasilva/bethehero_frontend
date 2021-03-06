import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import NewIncident from "./pages/NewIncident";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
