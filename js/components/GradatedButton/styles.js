import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";
const { white } = colors;

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
