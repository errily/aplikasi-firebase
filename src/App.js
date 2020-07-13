import React from "react";
import "./styles.css";
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import Login from "./scenes/login";
import LupaPassword from "./scenes/lupa-password";
import NotFound from "./scenes/404";
import Register from "./scenes/register";
import Private from "./scenes/private";
import PrivateRoute from "./components/PrivateRoute";


//import firebase context
import FirebaseProvider from "./components/FirebaseProvider";

//import komponent material ui
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './config/theme'

//import notistack
import { SnackbarProvider  } from 'notistack';

export default function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <FirebaseProvider >
    <Switch>
      <PrivateRoute path="/" component={Private} exact/>
      <PrivateRoute path="/pengaturan" component={Private}/>
      <PrivateRoute path="/transaksi" component={Private}/>
      <PrivateRoute path="/produk" component={Private}/>
      
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/lupa-password" component={LupaPassword} />
      <Route component={NotFound} />
    </Switch>
    </FirebaseProvider>
    </SnackbarProvider>
    </ThemeProvider>
    </>
  );
}
