import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFaves } from "../../config/models";

// import Redux components
import { connect } from "react-redux";
import { fetchSessionsData } from "../../redux/modules/sessions";

// import presentation components
import Faves from "./Faves";

class FavesContainer extends Component {
	static route = {
		navigationBar: {
			title: "Favourites"
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
			<Faves sessions={sessionsData} isLoading={isLoading} faves={faves} />
		);
	}
}

FavesContainer.propTypes = {
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

export default connect(mapStateToProps)(FavesContainer);
