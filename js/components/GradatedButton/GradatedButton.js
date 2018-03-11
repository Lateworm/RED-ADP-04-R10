import React from "react";
import PropTypes from "prop-types";

// import presentation components
import { Text, TouchableHighlight, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../config/styles";
const { purple, blue } = colors;

const GradatedButton = ({ title, onPress }) => (
	<View style={styles.outerView}>
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			locations={[0, 1]}
			colors={[purple, blue]}
			width={200}
			height={40}
			style={styles.gradient}
		>
			<TouchableHighlight
				style={styles.touchable}
				underlayColor={"transparent"}
				onPress={onPress}
			>
				<View style={styles.innerView}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</TouchableHighlight>
		</LinearGradient>
	</View>
);

GradatedButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};

export default GradatedButton;
