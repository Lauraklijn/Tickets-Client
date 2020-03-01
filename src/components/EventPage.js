import React, { Component } from "react";
import { connect } from "react-redux";

import CreateEvent from "../components/Events/CreateEvent";
import EventListContainer from "./Events/EventListContainer";

class EventPage extends Component {
  render() {
    return (
      <div>
        <h1>EVENT PAGE</h1>
        <h2>Welcome! FIND EVENTS AND BUY/SELL TICKETS</h2>

        <p>Create EVENT</p>
        <CreateEvent />

        <EventListContainer />
      </div>
    );
  }
}

export default connect()(EventPage);
