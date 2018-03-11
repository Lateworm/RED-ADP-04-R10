import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSpeakerData } from "../../redux/modules/speaker";
import { fetchFaves } from "../../redux/modules/faves";

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
		this.props.dispatch(fetchFaves());
	}

	render() {
		const { speakerData, isLoading, faves } = this.props;
		return (
			<Sessions
				session={this.props.route.params.session}
				isLoading={isLoading}
				speaker={speakerData}
				faves={faves}
			/>
		);
	}
}

SessionsContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	faves: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	route: PropTypes.object.isRequired,
	speakerData: PropTypes.object // not required because some sessions do not have a speaker
};

const mapStateToProps = state => {
	return {
		speakerData: state.speaker.speakerData,
		faves: state.faves.faves,
		isLoading: state.speaker.isLoading
	};
};

export default connect(mapStateToProps)(SessionsContainer);
