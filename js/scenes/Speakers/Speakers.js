import React from "react";
import PropTypes from "prop-types";
import { closeSpeaker } from "../../navigation/NavigationHelper";

// import presentation components
import { Image, Button, Linking, Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import GradatedButton from "../../components/GradatedButton/GradatedButton";

const Speakers = ({ speaker }) => (
	<View style={styles.view}>
		<Button
			onPress={() => closeSpeaker()}
			title="X"
			color="white"
			accessibilityLabel="Close this screen"
		/>
		<Text style={[styles.marginLR, styles.h1]}>About the Speaker</Text>

		<ScrollView style={[styles.marginLR, styles.scrollview]}>
			<Image
				style={styles.image}
				resizeMode={"contain"}
				source={{ uri: speaker.image }}
			/>
			<Text style={[styles.h2]}>{speaker.name}</Text>
			<Text style={[styles.marginLR]}>{speaker.bio}</Text>
			<GradatedButton
				onPress={() =>
					Linking.openURL(`${speaker.url}`).catch(err =>
						console.error("An error occurred", err)
					)
				}
				title="Read More on Wikipedia"
			/>
		</ScrollView>
	</View>
);

Speakers.propTypes = {
	speaker: PropTypes.array.isRequired
};

export default Speakers;
