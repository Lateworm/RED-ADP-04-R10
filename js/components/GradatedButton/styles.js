import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { black, white, mediumGrey } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	outerView: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "center",
		margin: 16
	},

	gradient: {
		borderRadius: 20
	},

	innerView: {
		paddingTop: 10
	},

	text: {
		fontSize: 16,
		color: white,
		textAlign: "center"
	}
});
