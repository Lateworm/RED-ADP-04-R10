import React from "react";
import PropTypes from "prop-types";

import { Text, View } from "react-native";
import { styles } from "./styles";

const Speakers = () => (
	<View>
		<Text>Speakers Scene.</Text>
	</View>
);

Speakers.propTypes = {
	data: PropTypes.array.isRequired
};

export default Speakers;
