import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Nav from "./components/pages/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
