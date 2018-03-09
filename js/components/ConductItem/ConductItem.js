import React, { Component } from "react";

// import presentation components
import { Text, Animated, Easing, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { typography, colors } from "../../config/styles";
const { purple, blue } = colors;

export default class ConductItem extends Component {
	constructor() {
		super();
		this.state = {
			showDescription: false
		};
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	};

	toggleText = () => {
		const { showDescription } = this.state;
		this.setState({
			showDescription: !showDescription
		});
	};

	render() {
		const { title, description } = this.props;
		return (
			<View>
				<TouchableHighlight
					onPress={this.toggleText}
					underlayColor={"transparent"}
				>
					<Text style={styles.h2}>+ {title}</Text>
				</TouchableHighlight>
				{this.state.showDescription ? (
					<Text style={styles.text}>{description}</Text>
				) : null}
			</View>
		);
	}
}
