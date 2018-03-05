import React from "react";
import PropTypes from "prop-types";

import {
	Button,
	Image,
	ScrollView,
	Text,
	TouchableHighlight,
	View
} from "react-native";

import moment from "moment";
import { goToSpeaker } from "../../navigation/NavigationHelper";
import { Fave, UnFave } from "../../config/models";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

const Sessions = ({ speaker, session, faves }) => (
	<ScrollView>
		<Text style={[styles.h2, styles.marginLR]}>{session.location}</Text>

		<Text style={[styles.h1, styles.marginLR]}>{session.title}</Text>

		<Text style={[styles.h3, styles.marginLR]}>
			{moment.unix(session.start_time).format("LT")}
		</Text>
		<Text style={[styles.marginLR]}>{session.description}</Text>
		<Text style={[styles.h2, styles.marginLR]}>Presented By:</Text>

		<TouchableHighlight
			style={[styles.marginLR]}
			underlayColor={colors.lightGrey}
			onPress={() => goToSpeaker(speaker)}
		>
			<View>
				<Image
					style={styles.image}
					resizeMode={"contain"}
					source={{ uri: speaker.image }}
				/>
				<Text>{speaker.name}</Text>
			</View>
		</TouchableHighlight>

		<View style={[styles.hr, styles.marginLR]} />

		<Button // https://facebook.github.io/react-native/docs/button.html
			onPress={
				faves.includes(session.session_id)
					? () => UnFave(session.session_id)
					: () => Fave(session.session_id)
			}
			title={
				faves.includes(session.session_id)
					? "Remove from Faves"
					: "Add to Faves"
			}
			color="#841584"
			accessibilityLabel="Add this session to your Faves"
		/>
	</ScrollView>
);

Sessions.propTypes = {
	session: PropTypes.object.isRequired
	// speaker: PropTypes.array.isRequired
	// favourites: PropTypes.array.isRequired
};

export default Sessions;
