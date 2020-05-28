import React, {Fragment } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";
import ToDoComponent from "../../components/Todo/todo";
import ReduxAdvanced from "../../components/Redux/reduxAdvanced";
import Home from "../../components/Home/Home"
export default function LandingPage(props) {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
        <div style={{color:"white"}}>
            <Link to="/">MY APP</Link>
          </div>
          <div style={{marginLeft:24,color:"white"}}>
            <Link to="/todo">To do App</Link>
          </div>
          <div style={{marginLeft:24,color:"white"}}>
            <Link to="/redux">Redux Advanced App</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
      <Route  exact path="/" component={Home} />
        <Route  path="/todo" component={ToDoComponent} />
        <Route path="/redux" component={ReduxAdvanced} />
      </Switch>
    </Fragment>
  );
}
