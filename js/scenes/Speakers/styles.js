import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { white } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	h1: {
		// Speaker name
		paddingTop: 4,
		paddingBottom: 4,
		fontSize: 24,
		fontFamily: typography.fontMain
	},

	h2: {
		// Location, presenter
		fontSize: 14,
		color: colors.white,
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
	}
});
