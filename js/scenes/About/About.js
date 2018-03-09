import React from "react";
import PropTypes from "prop-types";

// import presentation components
import {
	Animated,
	FlatList,
	Image,
	Text,
	ScrollView,
	StatusBar,
	View
} from "react-native";
import { styles } from "./styles";
import ConductItem from "../../components/ConductItem/ConductItem";
import { colors, typography } from "../../config/styles.js";
const { black, white, mediumGrey, red, purple } = colors;

const About = ({ data }) => (
	<ScrollView style={styles.view}>
		<StatusBar barStyle="light-content" />
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
				<ConductItem title={item.title} description={item.description} />
			)}
			keyExtractor={item => item.title}
		/>
	</ScrollView>
);

About.propTypes = {
	data: PropTypes.array.isRequired
};

export default About;
