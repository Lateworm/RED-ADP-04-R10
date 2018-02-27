import React, { Component } from "react";
import PropTypes from "prop-types";

import Sessions from "./Sessions";

class SessionsContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Sessions />;
  }
}

export default SessionsContainer;
