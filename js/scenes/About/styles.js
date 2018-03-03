import { Platform, StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";
const { black, nearBlack, lightGrey, purple } = colors;
const { fontMain, fontMainLight } = typography;

export const styles = StyleSheet.create({
	view: {
		marginLeft: 10,
		marginRight: 10
	},

	logo: {
		width: 170,
		height: 85,
		marginRight: "auto",
		marginLeft: "auto"
	},

	hr: {
		borderBottomColor: lightGrey,
		borderBottomWidth: 1,
		marginBottom: 8
	},

	h1: {
		fontFamily: fontMain,
		fontSize: 20,
		marginTop: 15
	},

	h2: {
		fontFamily: fontMain,
		marginTop: 8,
		color: purple
	},

	text: {
		color: nearBlack,
		marginTop: 5
	}
});
