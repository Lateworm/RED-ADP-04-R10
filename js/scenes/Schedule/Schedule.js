import React from "react";
import PropTypes from "prop-types";

import { SectionList, Text, TouchableHighlight, View } from "react-native";

// import presentation components
import { styles } from "./styles";
import { colors } from "../../config/styles.js";

import moment from "moment";
import { goToSession } from "../../navigation/NavigationHelper";

const Schedule = ({ data }) => (
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
								<Text>{item.title}</Text>
								<Text>{item.location}</Text>
							</View>
						</View>
					</TouchableHighlight>
				);
			}}
			keyExtractor={(item, index) => index}
			ItemSeparatorComponent={() => {
				return <View style={styles.separator} />;
			}}
			renderSectionHeader={({ section }) => (
				<Text style={styles.title}>
					{moment.unix(section.title).format("LT")}
				</Text>
			)}
			sections={data}
		/>
	</View>
);

Schedule.propTypes = {
	data: PropTypes.array.isRequired
};

export default Schedule;
