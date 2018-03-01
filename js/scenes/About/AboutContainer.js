import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

// import Redux components
import { connect } from "react-redux";
import { fetchConductData } from "../../redux/modules/about";

// import presentation components
import About from "./About";

class AboutContainer extends Component {
	static route = {
		navigationBar: {
			title: "About"
		}
	};

	componentDidMount() {
		this.props.dispatch(fetchConductData);
	}

	render() {
		const { conductData, isLoading } = this.props;
		return (
			<View>
				<About data={conductData} isLoading={isLoading} />
			</View>
		);
	}
}

AboutContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	conductData: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		conductData: state.about.conductData,
		isLoading: state.about.isLoading
	};
};

export default connect(mapStateToProps)(AboutContainer);
