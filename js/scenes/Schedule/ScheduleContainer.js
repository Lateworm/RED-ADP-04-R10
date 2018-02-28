import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSessionsData } from "../../redux/modules/sessions";

// import presentation components
import Schedule from "./Schedule";

class SessionsContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSessionsData());
  }

  render() {
    const { sessionsData, isLoading } = this.props;
    return <Schedule data={sessionsData} isLoading={isLoading} />;
  }
}

const mapStateToProps = state => {
  return {
    sessionsData: state.sessions.sessionsData,
    isLoading: state.sessions.isLoading
  };
};

export default connect(mapStateToProps)(SessionsContainer);
