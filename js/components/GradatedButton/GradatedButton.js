import React from "react";

// import presentation components
import {
	Button,
	Image,
	ScrollView,
	Text,
	TouchableHighlight,
	View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { typography, colors } from "../../config/styles";
const { purple, red } = colors;

const GradatedButton = ({ title, onPress }) => (
	<View style={styles.view}>
		<LinearGradient
			start={{ x: 0, y: 0.5 }}
			end={{ x: 1, y: 0.5 }}
			locations={[0, 1]}
			colors={[red, purple]}
			width={200}
			height={63}
		>
			<TouchableHighlight underlayColor={colors.purple} onPress={onPress}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableHighlight>
		</LinearGradient>
	</View>
);

export default GradatedButton;
