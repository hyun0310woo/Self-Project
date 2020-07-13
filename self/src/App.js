import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    );
  }
}
