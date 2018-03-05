import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { black, white, mediumGrey } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	h1: {
		// About the speaker
		paddingTop: 40,
		paddingBottom: 4,
		fontSize: 14,
		fontFamily: typography.fontMain,
		color: white
	},

	h2: {
		// Speaker's name
		fontSize: 24,
		textAlign: "center",
		fontFamily: typography.fontMain,
		paddingTop: 10,
		paddingBottom: 10
	},

	image: {
		width: 128,
		height: 128,
		borderRadius: 64
	},

	marginLR: {
		marginLeft: 10,
		marginRight: 10
	},

	view: {
		backgroundColor: black
	},

	scrollview: {
		backgroundColor: white,
		borderRadius: 8
	}
});
