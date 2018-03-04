import React, { Component } from "react";
import PropTypes from "prop-types";

// import presentation components
import Speakers from "./Speakers";

class SpeakersContainer extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <Speakers />;
	}
}

export default SpeakersContainer;
