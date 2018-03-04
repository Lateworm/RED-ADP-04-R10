import React from "react";
import PropTypes from "prop-types";

import { SectionList, Text, TouchableHighlight, View } from "react-native";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

import moment from "moment";
import { goToSession } from "../../navigation/NavigationHelper";

const Schedule = ({ sessions }) => (
	<View>
		<SectionList
			renderItem={({ item }) => {
				return (
					<TouchableHighlight
						underlayColor={colors.lightGrey}
						onPress={() => goToSession("schedule", item)}
					>
						<View>
							<View>
								<Text style={styles.h2}>{item.title}</Text>
								<Text style={styles.h3}>{item.location}</Text>
							</View>
						</View>
					</TouchableHighlight>
				);
			}}
			keyExtractor={(item, index) => index}
			ItemSeparatorComponent={() => {
				return <View style={styles.hr} />;
			}}
			renderSectionHeader={({ section }) => (
				<Text style={styles.h1}>{moment.unix(section.title).format("LT")}</Text>
			)}
			sections={sessions}
		/>
	</View>
);

Schedule.propTypes = {
	sessions: PropTypes.array.isRequired
};

export default Schedule;
