import React, { useState, useEffect, Fragment } from "react";
import { TextField, Button, AppBar, Toolbar } from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";
import ToDoComponent from "../../components/Todo/todo";
import ReduxAdvanced from "../../components/Redux/reduxAdvanced";

export default function LandingPage(props) {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Link to="/todo">To do App</Link>
          </div>
          <div style={{marginLeft:24}}>
            <Link to="/redux">Redux Advanced App</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/todo" component={ToDoComponent} />
        <Route path="/redux" component={ReduxAdvanced} />
      </Switch>
    </Fragment>
  );
}
