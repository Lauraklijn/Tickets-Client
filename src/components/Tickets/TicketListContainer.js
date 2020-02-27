import React from "react";
import TicketList from "./TicketList";
import { connect } from "react-redux";
import { loadTickets } from "../../tickets/ticket-action";

//import { Link } from "react-router-dom";

class TicketListContainer extends React.Component {
  componentDidMount() {
    console.log("What is loadTickets?", loadTickets);
    this.props.loadTickets();
  }

  render() {
    console.log("what is props.tickets?", this.props.tickets);
    return <TicketList tickets={this.props.tickets} />;
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
export default connect(mapStateToProps, { loadTickets })(TicketListContainer);
