// routes.jsx
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";
import Loader from "../Components/Loader";
import withHeader from "../Components/Views/withHeader";
import { defaultRoute, blogs } from "./routingConstants";

const Blogs = React.lazy(() => import("../Blogs"));
const Post = React.lazy(() => import("../Post"));

const Routes = () => (
  <Suspense fallback={<Loader isLoading={true} />}>
    <Loader />
    <Switch>
      <Redirect exact from={defaultRoute} to={blogs} />
      <Route exact path={blogs} component={withHeader(Blogs)} />
      <Route exact path={`${blogs}/:postId`} component={withHeader(Post)} />
    </Switch>
  </Suspense>
);

export default Routes;
