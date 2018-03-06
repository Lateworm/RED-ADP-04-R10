import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchSessionsData } from "../../redux/modules/sessions";
import { fetchFaves } from "../../redux/modules/faves";

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
		this.props.dispatch(fetchFaves());
	}

	render() {
		const { sessionsData, isLoading, faves } = this.props;
		return (
			<Faves sessions={sessionsData} isLoading={isLoading} faves={faves} />
		);
	}
}

FavesContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	sessionsData: PropTypes.array.isRequired,
	faves: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		sessionsData: state.sessions.sessionsData,
		faves: state.faves.faves,
		isLoading: state.sessions.isLoading
	};
};

export default connect(mapStateToProps)(FavesContainer);
