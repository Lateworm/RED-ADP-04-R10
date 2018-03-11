import React, { Component } from "react";
import PropTypes from "prop-types";

// import presentation components
import {
	Text,
	Animated,
	LayoutAnimation,
	Platform,
	TouchableHighlight,
	UIManager,
	View
} from "react-native";
import { styles } from "./styles";

export default class ConductItem extends Component {
	constructor() {
		super();
		this.state = {
			showDescription: false
		};
		if (Platform.OS === "android") {
			UIManager.setLayoutAnimationEnabledExperimental &&
				UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	};

	toggleText = () => {
		const { showDescription } = this.state;
		this.setState({
			showDescription: !showDescription,
			descriptionSlide: new Animated.Value(0) // a distance for the description to slide out??
		});
	};

	render() {
		const { title, description } = this.props;
		LayoutAnimation.easeInEaseOut();
		return (
			<View>
				<TouchableHighlight
					onPress={this.toggleText}
					underlayColor={"transparent"}
				>
					<Text style={styles.h2}>
						{this.state.showDescription ? "-  " : "+  "}
						{title}
					</Text>
				</TouchableHighlight>

				{this.state.showDescription && (
					<Animated.Text style={styles.text}>{description}</Animated.Text>
				)}
			</View>
		);
	}
}
