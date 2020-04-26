import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Admin from "./layout/Admin";
import SignIn from "./page/signIn/SignIn";
import Dashboard from "./page/dashboard/Dashboard";
import Orders from "./page/orders"
import Customers from "./page/customers"
import Reports from "./page/reports"
import Integration from "./page/integrations"
import CurrentMontsReports from "./page/currentMontsReports"
import LastQuartetReports from "./page/lastQuartetReports"
import YearEndSaleReports from "./page/yearEndSaleReports"
import { useAuth } from "./hooks/useAuth"

export function AppRouter() {
  const auth = useAuth()
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Route path="/login"
        render={({ location }) =>
          !auth.user ? (
            <SignIn />
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
        }>
      </Route>
      <PrivateRoute path="/">
        <DashboardRouter />
      </PrivateRoute>
    </Switch>
  )
}

export function DashboardRouter() {
  return (
    <Admin>
      <Switch>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Route path="/admin/reports/current-month">
          <CurrentMontsReports />
        </Route>
        <Route path="/admin/reports/last-quarter">
          <LastQuartetReports />
        </Route>
        <Route path="/admin/reports/year-end-sale">
          <YearEndSaleReports />
        </Route>
        <Route path="/admin/orders">
          <Orders />
        </Route>
        <Route path="/admin/customers">
          <Customers />
        </Route>
        <Route path="/admin/reports">
          <Reports />
        </Route>
        <Route path="/admin/integrations">
          <Integration />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Admin>
  );
}

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}