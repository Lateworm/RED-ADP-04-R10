import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFaves } from "../../config/models";

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
		const faves = getFaves().reduce((array, cursor) => {
			array.push(cursor.id);
			return array;
		}, []);
		return (
			<Schedule sessions={sessionsData} isLoading={isLoading} faves={faves} />
		);
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
