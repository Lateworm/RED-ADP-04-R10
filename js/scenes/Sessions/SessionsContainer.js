import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSessionsData } from "../../redux/modules/sessions";

// import presentation components
import Sessions from "./Sessions";

class SessionsContainer extends Component {
  static route = {
    navigationBar: {
      title: "Sessions"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSessionsData());
  }

  render() {
    const { sessionsData, isLoading } = this.props;
    return <Sessions data={sessionsData} isLoading={isLoading} />;
  }
}

const mapStateToProps = state => {
  return {
    sessionsData: state.sessions.sessionsData,
    isLoading: state.sessions.isLoading
  };
};

export default connect(mapStateToProps)(SessionsContainer);
