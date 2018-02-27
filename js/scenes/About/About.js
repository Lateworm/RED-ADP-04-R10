import React from "react";
import PropTypes from "prop-types";

import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

const About = ({ data }) => (
  <View>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Text>{`${item.title} ${item.description}`}</Text>
      )}
      keyExtractor={item => item.title}
    />
  </View>
);

export default About;
