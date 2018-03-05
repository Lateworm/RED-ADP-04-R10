import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";
const { black, white, mediumGrey } = colors;
const { fontMain } = typography;

export const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 15
	}
});
