import React, { Component } from "react";
import { connect } from "react-redux";
import TicketForm from "./TicketForm";
import { createTicket } from "../../tickets/ticket-action";
//import { Link } from "react-router-dom";

class CreateTicketContainer extends Component {
  state = {
    name: "",
    author: "",
    description: "",
    image: "",
    price: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("WHATTT IS THE state", this.state);
    this.props.dispatch(
      createTicket(
        this.state.name,
        this.state.author,
        this.state.description,
        this.state.image,
        this.state.price
      )
    );
  };

  render() {
    console.log("UserID", this.props.userId.userData);
    return (
      <div>
        <TicketForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state
  };
}

export default connect(mapStateToProps)(CreateTicketContainer);
