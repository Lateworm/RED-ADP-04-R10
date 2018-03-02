import React from "react";
import PropTypes from "prop-types";

import { ScrollView, Text, TouchableHighlight } from "react-native";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

import moment from "moment";
import { goToSpeaker } from "../../navigation/NavigationHelper";

const Sessions = ({ session }) => (
	<ScrollView>
		<Text>{session.location}</Text>

		<Text>{session.title}</Text>

		<Text>{moment.unix(session.start_time).format("LT")}</Text>
		<Text>{session.description}</Text>
		<Text>Presented By</Text>

		<TouchableHighlight
			underlayColor={colors.lightGrey}
			onPress={() => goToSpeaker(session.speaker)}
		>
			<Text>{session.speaker}</Text>
		</TouchableHighlight>
	</ScrollView>
);

Sessions.propTypes = {
	session: PropTypes.object.isRequired
};

export default Sessions;
