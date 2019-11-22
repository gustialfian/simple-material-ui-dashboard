import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Admin from "./layout/Admin";
import Dashboard from "./page/dashboard/Dashboard";
import SignIn from "./page/signIn/SignIn";

export function AppRouter() {
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Route path="/admin">
        <DashboardRouter />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  )
}

export function DashboardRouter() {
  return (
    <Admin>
      <Switch>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Route path="/admin">
          <Dashboard />
        </Route>
      </Switch>
    </Admin>
  );
}

