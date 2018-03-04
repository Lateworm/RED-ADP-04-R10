import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSessionsData } from "../../redux/modules/sessions";

// import presentation components
import Schedule from "./Schedule";

class ScheduleContainer extends Component {
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
		return <Schedule sessions={sessionsData} isLoading={isLoading} />;
	}
}

ScheduleContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	sessionsData: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		sessionsData: state.sessions.sessionsData,
		isLoading: state.sessions.isLoading
	};
};

export default connect(mapStateToProps)(ScheduleContainer);
