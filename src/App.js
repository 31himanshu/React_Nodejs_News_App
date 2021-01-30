import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Preferences from './components/Preferences';
import useToken from './components/UseToken';
import BasePage from "./BasePage";

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
        <Route path="/dashboard">
            <BasePage />
          </Route>
         
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;