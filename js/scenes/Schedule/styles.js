import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
const { black, nearBlack, lightGrey, purple } = colors;
const { fontMain, fontMainLight } = typography;

export const styles = StyleSheet.create({
	hr: {
		borderBottomColor: lightGrey,
		borderBottomWidth: 1,
		marginBottom: 8
	},

	h1: {
		// times in grey boxes
		backgroundColor: colors.lightGrey,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 4,
		paddingBottom: 4,
		fontSize: 12,
		fontFamily: typography.fontMain
	},

	h2: {
		// session titles
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,

		fontSize: 14,
		fontFamily: typography.fontMain
	},

	h3: {
		// locations
		fontSize: 12,
		color: colors.mediumGrey,
		fontFamily: typography.fontMain,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 6,
		paddingBottom: 10
	}
});
