import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSpeakersData } from "../../redux/modules/speakers";

// import presentation components
import Sessions from "./Sessions";

class SessionsContainer extends Component {
	static route = {
		navigationBar: {
			title: "Session"
		}
	};

	componentDidMount() {
		this.props.dispatch(fetchSpeakersData());
	}

	render() {
		const { sessionsData, isLoading } = this.props;
		return (
			<Sessions
				session={this.props.route.params.session}
				isLoading={isLoading}
			/>
		);
	}
}

SessionsContainer.propTypes = {
	sessionsData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		sessionsData: state.sessions.sessionsData,
		isLoading: state.sessions.isLoading
	};
};

export default connect(mapStateToProps)(SessionsContainer);
