import React, { Component } from "react";
import { connect } from "react-redux";

import CreateEvent from "../components/Events/CreateEvent";
import EventListContainer from "./Events/EventListContainer";

class EventPage extends Component {
  render() {
    return (
      <div>
        <h1>EVENT PAGE</h1>
        <h2>FIND EVENTS AND FIND/SELL TICKETS</h2>

        <p>CREATE EVENT </p>
        <p>(You have to be logged in to create an event)</p>
        <CreateEvent />

        <EventListContainer />
      </div>
    );
  }
}

export default connect()(EventPage);
