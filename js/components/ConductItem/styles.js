import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { purple, nearBlack } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
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
