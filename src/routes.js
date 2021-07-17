import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          path="*"
          component={() => (
            <center>
              <h1>Error 404 not found</h1>
            </center>
          )}
        />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
