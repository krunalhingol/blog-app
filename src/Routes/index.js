// routes.jsx
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";
import Blogs from "../Blogs";
import Loader from "../Components/Loader";
import { home, defaultRoute } from "./routingConstants";

const Routes = () => (
  <Suspense fallback={<Loader isLoading={true} />}>
    <Switch>
      <Redirect exact from={defaultRoute} to={home} />
      <Route exact path={home} component={Blogs} />
    </Switch>
  </Suspense>
);

export default Routes;
