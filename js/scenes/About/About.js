import React from "react";
import PropTypes from "prop-types";

import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

const About = ({ data }) => (
	<View style={styles.view}>
		<Text style={styles.text}>
			R10 is a conference that focuses on just about any topic related to dev
		</Text>
		<Text style={styles.heading}>Date & Venue</Text>
		<Text style={styles.text}>
			The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver,
			BC
		</Text>
		<Text style={styles.heading}>Code of Conduct</Text>
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View>
					<Text style={styles.heading}>{item.title}</Text>
					<Text style={styles.text}>{item.description}</Text>
				</View>
			)}
			keyExtractor={item => item.title}
		/>
	</View>
);

About.propTypes = {
	data: PropTypes.array.isRequired
};

export default About;
