import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
const { lightGrey } = colors;

export const styles = StyleSheet.create({
	hr: {
		borderBottomColor: lightGrey,
		borderBottomWidth: 1,
		marginBottom: 8
	},

	h1: {
		// times in grey boxes
		backgroundColor: colors.lightGrey,
		paddingTop: 4,
		paddingBottom: 4,
		fontSize: 12,
		fontFamily: typography.fontMain
	},

	h2: {
		// session titles
		paddingTop: 10,

		fontSize: 14,
		fontFamily: typography.fontMain
	},

	h3: {
		// locations
		fontSize: 12,
		color: colors.mediumGrey,
		fontFamily: typography.fontMain,
		paddingTop: 6,
		paddingBottom: 10
	},

	favedView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},

	marginLR: {
		marginLeft: 10,
		marginRight: 10
	},

	paddingLR: {
		paddingLeft: 10,
		paddingRight: 10
	}
});
