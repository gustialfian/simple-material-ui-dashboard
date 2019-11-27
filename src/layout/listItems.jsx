import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export function MainListItems() {
  const location = useLocation()
  
  return (
    <div>
      <ListItem button component={NavLink} exact to="/admin" selected={location.pathname === "/admin"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/orders" selected={location.pathname === "/admin/orders"}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/customers" selected={location.pathname === "/admin/customers"}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/reports" selected={location.pathname === "/admin/reports"}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/integrations" selected={location.pathname === "/admin/integrations"}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
  )
};

export function SecondaryListItems() {
  const location = useLocation()
  
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button component={NavLink} exact to="/admin/reports/current-month" selected={location.pathname === "/admin/reports/current-month"}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/reports/last-quarter" selected={location.pathname === "/admin/reports/last-quarter"}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button component={NavLink} exact to="/admin/reports/year-end-sale" selected={location.pathname === "/admin/reports/year-end-sale"}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
}