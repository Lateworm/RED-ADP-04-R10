import React from "react";
import PropTypes from "prop-types";
import { closeSpeaker } from "../../navigation/NavigationHelper";

// import presentation components
import {
	Image,
	TouchableHighlight,
	Linking,
	Text,
	View,
	ScrollView
} from "react-native";
import { styles } from "./styles";
import GradatedButton from "../../components/GradatedButton/GradatedButton";
import Icon from "react-native-vector-icons/Ionicons";

const Speakers = ({ speaker }) => (
	<View style={styles.view}>
		<View style={[styles.marginLR, styles.h1container]}>
			<TouchableHighlight onPress={() => closeSpeaker()}>
				<Icon name={"ios-close"} size={40} color={"white"} />
			</TouchableHighlight>
			<Text style={styles.h1}>About the Speaker</Text>
			<Text>_</Text>
		</View>

		<ScrollView style={[styles.marginLR, styles.scrollview]}>
			<Image
				style={styles.image}
				resizeMode={"contain"}
				source={{ uri: speaker.image }}
			/>
			<Text style={[styles.h2]}>{speaker.name}</Text>
			<Text style={[styles.marginLR, styles.text]}>{speaker.bio}</Text>
			<GradatedButton
				onPress={() => Linking.openURL(`${speaker.url}`)}
				title="Read More on Wikipedia"
			/>
		</ScrollView>
	</View>
);

Speakers.propTypes = {
	speaker: PropTypes.object.isRequired
};

export default Speakers;
