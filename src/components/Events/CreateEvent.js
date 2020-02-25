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

    // this.setState({ name: "", description: "", imageUrl: "", date: "" });
  };

  render() {
    console.log("what is events", this.state);
    // const eventList = this.state.event.map(event => {
    //   return <div key={event.id}>{event.name}</div>;
    // });

    return (
      <div>
        <EventForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {/* <h1>{eventList}</h1> */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events
// });

//export default connect(null, { createEvent })(CreateEventContainer);

export default connect()(CreateEventContainer);
