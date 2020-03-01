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
      <div class="d-flex justify-content-center">
        <Card className="mt-3" border="dark" style={{ width: "30rem" }}>
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

// <div>
// <h1>RISK is {this.props.ticket.risk}%</h1>
// <li> Name: {this.props.ticket.name} </li>
// <li> Author: {this.props.ticket.author}</li>
// <li> Description: {this.props.ticket.description}</li>
// <li> € {this.props.ticket.price} </li>
// <li> Image: {this.props.ticket.image} </li>
// <li> Risk:{this.props.ticket.totalRisk}</li>
// </div>

{
  /* <Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={this.props.ticket.image} />
<Card.Body>
  <Card.Title>{this.props.ticket.name}</Card.Title>
  <Card.Text>
    <li>{this.props.ticket.description}</li>
    <li> € {this.props.ticket.price} </li>
    <li> Risk:{this.props.ticket.totalRisk}</li>
  </Card.Text>
  <Button variant="primary">BUY</Button>
  <Card.Footer className="text-muted">
    Author: {this.props.ticket.author}
  </Card.Footer>
</Card.Body>
</Card> */
}
