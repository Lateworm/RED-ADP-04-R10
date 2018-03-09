import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";
const { nearBlack, lightGrey, purple } = colors;
const { fontMain } = typography;

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

	text: {
		color: nearBlack,
		marginTop: 5
	}
});
