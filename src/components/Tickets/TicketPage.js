import React from "react";
import { TicketDetails } from "../../tickets/ticket-action";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class TicketPage extends React.Component {
  componentDidMount() {
    console.log("What is TicketsDetails", this.props.TicketDetails);
    this.props.TicketDetails(this.props.match.params.id);
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card className="mt-5" border="dark" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={this.props.ticket.image} />

          <Card.Header border="dark">{this.props.ticket.name}</Card.Header>
          <Card.Body>
            <Card.Title>€ {this.props.ticket.price}</Card.Title>
            <Card.Text>{this.props.ticket.description}</Card.Text>
            <Button variant="dark">BUY</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Author: {this.props.ticket.author}
            <li>Risk:{this.props.ticket.risk}%</li>
          </Card.Footer>
        </Card>
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
