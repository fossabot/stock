import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
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
