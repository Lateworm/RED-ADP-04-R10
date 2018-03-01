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
		return <Schedule data={sessionsData} isLoading={isLoading} />;
	}
}

ScheduleContainer.propTypes = {
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

export default connect(mapStateToProps)(ScheduleContainer);
