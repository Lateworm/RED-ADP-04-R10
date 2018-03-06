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
const { purple, blue } = colors;

const GradatedButton = ({ title, onPress }) => (
	<View style={styles.view}>
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			locations={[0, 1]}
			colors={[purple, blue]}
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
