import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppRouter } from "./Router";
import { ProvideAuth } from "./hooks/useAuth";

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <CssBaseline />
        <AppRouter />
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
