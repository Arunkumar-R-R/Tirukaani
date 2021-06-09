import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Add_new_client from './components/client/add_new_client';
import add_new_client from './components/client/add_new_client';
import Deal_page from './pages/deal_page/Deal_page';
import Add_new_client_form from './pages/form/Add_new_client_form';
import Form from './pages/form/Add_new_client_form';
import Home_page from './pages/home_page/Home_page';
import history from './history';


export default function Routes() {
   
        return (
            <Router >
                  <Switch>
                    <Route exact path="/" component={Home_page} />
                    <Route path="/addclient" component={Add_new_client_form} />
                </Switch>
            </Router>
        );
    }
