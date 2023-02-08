import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { AuthProvider } from "./Context/AuthProvider";
import { ClientProvider } from "./Context/ClientProvider";
import Account from "./pages/Account/Account";
import Clienthome from "./pages/Clienthome/Clienthome";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App vh-100">
      <Router>
        <Switch>
          {currentUser === null || currentUser === false ? (
            <>
              <Route exact path="/">
                <Login></Login>
              </Route>
            </>
          ) : (
            <PrivateRoute>
              <ClientProvider>
                <nav className="navigation">
                  <Navigation></Navigation>
                </nav>
                <div className="main-container">
                  <Route path="/account">
                    <Account></Account>
                  </Route>
                  <Route path="/home/:id">
                    <Clienthome></Clienthome>
                  </Route>
                  <Route exact path="/home">
                    <Home></Home>
                  </Route>
                </div>
              </ClientProvider>
            </PrivateRoute>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
