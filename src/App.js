import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../src/components/HomePage";
import SignupForm from "../src/components/Signup";
import EventPage from "../src/components/EventPage";
import Login from "../src/components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/signup">
              <li>Sign up!</li>
            </Link>
            <Link to="/login">
              <li>Login</li>{" "}
            </Link>
          </nav>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/eventpage" component={EventPage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
