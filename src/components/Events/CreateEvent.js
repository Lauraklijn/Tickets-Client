import React, { Component } from "react";
import EventForm from "../Events/EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../events/event-action";
//import { Link } from "react-router-dom";

class CreateEventContainer extends Component {
  state = {
    name: "",
    description: "",
    imageUrl: "",
    date: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(
      createEvent(
        this.state.name,
        this.state.description,
        this.state.imageUrl,
        this.state.date
      )
    );
  };

  render() {
    // console.log("what is events", this.state.events);
    // const eventList = this.state.events.map(event => {
    //   return <div key={event.id}>{event.name}</div>;
    // }); --> moved to eventList

    return (
      <div>
        <EventForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect()(CreateEventContainer);
