import React, { Component } from "react";
import PropTypes from "prop-types";

// import presentation components
import Speakers from "./Speakers";

class SpeakersContainer extends Component {
	static propTypes = {
		speaker: PropTypes.object.isRequired
	};

	render() {
		console.log("speaker:", speaker);
		const { speaker } = this.props;
		return <Speakers speaker={speaker} />;
	}
}

export default SpeakersContainer;
