import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "../src/components/Signup";
import EventPage from "../src/components/EventPage";
import Login from "../src/components/Login";
import TicketPage from "./components/Tickets/TicketPage";
import TicketListContainer from "./components/Tickets/TicketListContainer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Ticketplace</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">Signup!</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Navbar>

          <Route exact path="/" component={EventPage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/event/:id/tickets"
            component={TicketListContainer}
          />
          <Route exact path="/tickets/:id" component={TicketPage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
