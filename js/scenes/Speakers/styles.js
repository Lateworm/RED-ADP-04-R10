import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { black, white, mediumGrey } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	h1container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 36,
		paddingBottom: 20
	},

	h1: {
		// About the speaker
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
		// paddingTop: 10,
		paddingBottom: 10
	},

	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginTop: 20,
		marginBottom: 20,
		marginRight: "auto",
		marginLeft: "auto"
	},

	text: {
		lineHeight: 24,
		marginBottom: 24
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
		borderRadius: 8,
		marginBottom: 10
	}
});
