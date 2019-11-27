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
  console.log(`hai`)
  console.log(auth.user)
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      {/* <Route path="/login">
        <SignIn />
      </Route> */}

      <Route path="/login"
        render={() => auth.user ?
          (
            <Redirect to="/" />
          ) : (
            <SignIn />
          )
        }
      />
      <Route path="/"
        render={() => auth.user ?
          (
            <DashboardRouter />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
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
