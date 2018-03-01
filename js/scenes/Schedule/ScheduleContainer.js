import React, { Component } from "react";
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

SessionsContainer.propTypes = {
	sessionsData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(SessionsContainer);
