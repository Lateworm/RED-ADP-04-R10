import React from "react";
import PropTypes from "prop-types";

// import presentation components
import { Text, View } from "react-native";
import { styles } from "./styles";

const Speakers = ({ speaker }) => (
	<View>
		<Text>About the Speaker</Text>
		<Text>{speaker.name}</Text>
	</View>
);

Speakers.propTypes = {
	speaker: PropTypes.array.isRequired
};

export default Speakers;
