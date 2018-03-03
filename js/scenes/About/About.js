import React from "react";
import PropTypes from "prop-types";

// import presentation components
import {
	Animated,
	FlatList,
	Image,
	Text,
	ScrollView,
	View
} from "react-native";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { colors, typography } from "../../config/styles.js";
const { black, white, mediumGrey, red, purple } = colors;

const About = ({ data }) => (
	<ScrollView style={styles.view}>
		<Image
			style={styles.logo}
			resizeMode={"contain"}
			source={require("../../assets/images/r10_logo.png")}
		/>

		<View style={styles.hr} />
		<Text style={styles.text}>
			R10 is a conference that focuses on just about any topic related to dev
		</Text>
		<Text style={styles.h1}>Date & Venue</Text>
		<Text style={styles.text}>
			The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver,
			BC
		</Text>
		<Text style={styles.h1}>Code of Conduct</Text>
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View>
					<Text style={styles.h2}>+ {item.title}</Text>
					<Text style={styles.text}>{item.description}</Text>
				</View>
			)}
			keyExtractor={item => item.title}
		/>
	</ScrollView>
);

About.propTypes = {
	data: PropTypes.array.isRequired
};

export default About;
