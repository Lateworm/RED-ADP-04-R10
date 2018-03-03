import React, { Component } from "react";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchConductData } from "../../redux/modules/about";

// import presentation components
import Faves from "./Faves";

class FavesContainer extends Component {
	static route = {
		navigationBar: {
			title: "Favourites"
		}
	};

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <Faves />;
	}
}

export default FavesContainer;
