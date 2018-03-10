import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

// import Redux components
import { addFave, removeFave } from "../../redux/modules/faves";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";
import GradatedButton from "../../components/GradatedButton/GradatedButton";
import Icon from "react-native-vector-icons/Ionicons";

const Sessions = ({ speaker, session, faves, dispatch }) => {
	return (
		<ScrollView>
			<Text style={[styles.h2, styles.marginLR]}>{session.location}</Text>

			{faves.includes(session.session_id) ? (
				<Icon
					name={"ios-heart"}
					size={16}
					// ios={`ios-${iconName}`}
					// md={`md-${iconName}`}
					color={colors.red}
				/>
			) : null}

			<Text style={[styles.h1, styles.marginLR]}>{session.title}</Text>

			<Text style={[styles.h3, styles.marginLR]}>
				{moment.unix(session.start_time).format("LT")}
			</Text>
			<Text style={[styles.marginLR]}>{session.description}</Text>

			{speaker && (
				<View>
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
				</View>
			)}

			<View style={[styles.hr, styles.marginLR]} />

			<GradatedButton
				onPress={
					faves.includes(session.session_id)
						? () => dispatch(removeFave(session.session_id))
						: () => dispatch(addFave(session.session_id))
				}
				title={
					faves.includes(session.session_id)
						? "Remove from Faves"
						: "Add to Faves"
				}
			/>
		</ScrollView>
	);
};

Sessions.propTypes = {
	session: PropTypes.object.isRequired,
	speaker: PropTypes.object.isRequired,
	faves: PropTypes.array.isRequired
};

export default connect()(Sessions);
