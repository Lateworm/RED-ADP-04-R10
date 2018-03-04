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

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

import moment from "moment";
import { goToSpeaker } from "../../navigation/NavigationHelper";

const Sessions = ({ speaker, session }) => (
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
			onPress={() => goToSpeaker(session.speaker)}
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

		{/* <Button // https://facebook.github.io/react-native/docs/button.html
			onPress={onPressLearnMore}
			title="Learn More"
			color="#841584"
			accessibilityLabel="favourite this session"
		/> */}
	</ScrollView>
);

Sessions.propTypes = {
	session: PropTypes.object.isRequired
	// speaker: PropTypes.array.isRequired
	// favourites: PropTypes.array.isRequired
};

export default Sessions;
