import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSpeakerData } from "../../redux/modules/speaker";

// import presentation components
import Sessions from "./Sessions";

class SessionsContainer extends Component {
	static route = {
		navigationBar: {
			title: "Session"
		}
	};

	componentDidMount() {
		this.props.dispatch(
			fetchSpeakerData(this.props.route.params.session.speaker)
		);
	}

	render() {
		const { speakerData, isLoading } = this.props;
		return (
			<Sessions
				session={this.props.route.params.session}
				isLoading={isLoading}
				speaker={speakerData}
			/>
		);
	}
}

SessionsContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	// speakerData: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		speakerData: state.speaker.speakerData,
		isLoading: state.speaker.isLoading
	};
};

export default connect(mapStateToProps)(SessionsContainer);
