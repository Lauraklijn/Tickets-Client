import React from "react";
import TicketList from "./TicketList";
import { connect } from "react-redux";
import { loadTickets } from "../../tickets/ticket-action";
import TicketForm from "./TicketForm";
import { createTicket } from "../../tickets/ticket-action";

//import { Link } from "react-router-dom";

class TicketListContainer extends React.Component {
  state = {
    name: "",
    author: "",
    description: "",
    image: "",
    price: ""
  };

  eventId = parseInt(this.props.location.pathname.split("/")[2]);

  componentDidMount() {
    console.log("What is loadTickets?", loadTickets);
    this.props.loadTickets();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("WHATTT IS THE state", this.props);
    console.log("checking", this.props.location.pathname.split("/")[2]);
    const eventId = parseInt(this.props.location.pathname.split("/")[2]);
    console.log("...............", eventId);

    this.props.createTicket(
      this.state.name,
      this.state.author,
      this.state.description,
      this.state.image,
      this.state.price,
      eventId
    );
    //window.location.reload();
  };

  render() {
    console.log("what is props.tickets?", this.props.tickets);
    return (
      <div>
        <TicketForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <TicketList tickets={this.props.tickets} eventId={this.eventId} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state (ticketList)", state);
  return {
    tickets: state.ticketData
  };
};

// const mapStateToProps = state => ({
//   event: state.eventData,

//   loggedIn: !!state.auth
// });

// export default connect(mapStateToProps, { loadEvents })(EventDetailsContainer);
export default connect(mapStateToProps, { loadTickets, createTicket })(
  TicketListContainer
);
