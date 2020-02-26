// import React from "react";
// import EventDetails from "./EventDetails";
// import { connect } from "react-redux";
// import { loadEvents } from "../../events/event-action";
// import CreateTicketContainer from "../../components/Tickets/CreateTicketContainer";

// import { Link } from "react-router-dom";

// class EventDetailsContainer extends React.Component {
//   componentDidMount() {
//     this.props.loadEvents(Number(this.props.match.params.id));
//   }
//   render() {
//     console.log(this.props.event);
//     return (
//       <>
//         <EventDetails event={this.props.event} />

//         {this.props.loggedIn ? (
//           <CreateTicketContainer eventId={this.props.event.id} />
//         ) : (
//           <Link to="/ticketPage">
//             Please log in to add players to this team.
//           </Link>
//         )}
//       </>
//     );
//   }
// }

// // const mapStateToProps = state => ({
// //   team: state.team,

// //   loggedIn: !!state.auth
// // });

// // export default connect(mapStateToProps, { loadEvents })(EventDetailsContainer);
// export default connect()(EventDetailsContainer);
