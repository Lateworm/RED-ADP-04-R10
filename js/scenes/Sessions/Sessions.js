import React from "react";
import PropTypes from "prop-types";

import { Text, View } from "react-native";
import { styles } from "./styles";

const Sessions = ({ data }) => (
	<View>
		<Text>Sessions Scene.</Text>
	</View>
);

Sessions.propTypes = {
	data: PropTypes.array.isRequired
};

export default Sessions;
