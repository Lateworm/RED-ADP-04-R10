import { Platform, StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";
const { darkGrey, purple } = colors;
const { fontMain, fontMainLight } = typography;

export const styles = StyleSheet.create({
	view: {
		marginLeft: 10,
		marginRight: 10
	},

	logo: {
		width: 200,
		height: 100,
		marginRight: "auto",
		marginLeft: "auto"
	},

	h1: {
		fontFamily: fontMain,
		fontSize: 20,
		marginBottom: 5
	},

	h2: {
		fontFamily: fontMain,
		fontSize: 20,
		marginBottom: 5,
		color: purple
	},

	text: {
		color: darkGrey,
		marginBottom: 10
	}
});
