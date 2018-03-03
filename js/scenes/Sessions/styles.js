import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
const { lightGrey, red } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	h1: {
		// Session title
		paddingTop: 4,
		paddingBottom: 4,
		fontSize: 24,
		fontFamily: typography.fontMain
	},

	h2: {
		// Location, presenter
		fontSize: 14,
		color: colors.mediumGrey,
		fontFamily: typography.fontMain,
		paddingTop: 10,
		paddingBottom: 10
	},

	h3: {
		// Location, presenter
		fontSize: 14,
		color: colors.red,
		fontFamily: typography.fontMain,
		paddingTop: 10,
		paddingBottom: 10
	},

	hr: {
		borderBottomColor: lightGrey,
		borderBottomWidth: 1,
		marginBottom: 8
	},

	image: {
		width: 64,
		height: 64,
		borderRadius: 32
	},

	marginLR: {
		marginLeft: 10,
		marginRight: 10
	}
});
