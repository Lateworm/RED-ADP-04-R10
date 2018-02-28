import React from "react";
import PropTypes from "prop-types";

import { SectionList, Text, TouchableHighlight, View } from "react-native";
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
              <View style={styles.container}>
                <Text style={styles.subtitle}>{item.title}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{item.location}</Text>
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

export default Schedule;
