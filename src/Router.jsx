import React from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Admin from "./layout/Admin";
import Dashboard from "./page/dashboard/Dashboard";

function Login() {
  return <Link to="/admin/">Dashboard</Link>
}

export function AppRouter() {
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Route path="/admin">
        <DashboardRouter />
      </Route>
      <Route path="/">
        <Login />
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

