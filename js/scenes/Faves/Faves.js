import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { goToSession } from "../../navigation/NavigationHelper";

// import presentation components
import { SectionList, Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../config/styles.js";
import Icon from "react-native-vector-icons/Ionicons";

const Faves = ({ sessions, faves }) => (
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
								{faves.includes(item.session_id) ? (
									<Icon
										name={"ios-heart"}
										size={16}
										// ios={`ios-${iconName}`}
										// md={`md-${iconName}`}
										color={colors.red}
									/>
								) : null}
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

Faves.propTypes = {
	sessions: PropTypes.array.isRequired,
	faves: PropTypes.array.isRequired
};

export default Faves;
