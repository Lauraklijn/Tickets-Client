import React from "react";
import { TicketDetails } from "../../tickets/ticket-action";
import { connect } from "react-redux";

class TicketPage extends React.Component {
  componentDidMount() {
    console.log("What is TicketsDetails", this.props.TicketDetails);
    this.props.TicketDetails(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>RISK is {this.props.ticket.risk}%</h1>
        <li> Name: {this.props.ticket.name} </li>
        <li> Author: {this.props.ticket.author}</li>
        <li> Description: {this.props.ticket.description}</li>
        <li> € {this.props.ticket.price} </li>
        <li> Image: {this.props.ticket.image} </li>
        <li> Risk:{this.props.ticket.totalRisk}</li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state", state);
  return {
    ticket: state.ticketData
  };
};

export default connect(mapStateToProps, { TicketDetails })(TicketPage);
