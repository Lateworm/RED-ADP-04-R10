import React, { Component } from "react";
import PropTypes from "prop-types";

import Faves from "./Faves";

class FavesContainer extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <Faves />;
	}
}

export default FavesContainer;
