import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppRouter } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
