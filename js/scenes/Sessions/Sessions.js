import React from "react";
import PropTypes from "prop-types";

import { Text, View, ScrollView } from "react-native";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

import moment from "moment";
import { goToSpeaker } from "../../navigation/NavigationHelper";

const Sessions = ({ session }) => (
	<ScrollView>
		<View>
			<View>
				<Text>{session.location}</Text>
				{console.log(session)}
			</View>
			<View>
				<Text>{session.title}</Text>
				<Text>{moment.unix(session.start_time).format("LT")}</Text>
				<Text>{session.description}</Text>
			</View>
		</View>
	</ScrollView>
);

// Sessions.propTypes = {
// 	session: PropTypes.object.isRequired
// };

export default Sessions;
