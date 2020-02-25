import React from "react";
import { loadEvents } from "../../events/event-action";
import { connect } from "react-redux";
import EventList from "../Events/EventList";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <div>
        <EventList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state", state);
  return {
    events: state.eventData
  };
};

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
