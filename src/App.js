import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Client from "./Clients";
import Team from "./Teams";
import Project from "./Projects";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route>
          <Client />
          <Team />
          <Project />
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
