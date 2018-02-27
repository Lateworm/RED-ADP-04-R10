import React, { Component } from "react";
import { FlatList, Text, View } from "react-native"; // TODO: will prolly need to move to About along with the view code
import PropTypes from "prop-types";

import About from "./About";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [] // future home of Code of Conduct data
    };
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data); // log Code of Conduct data to the debugger

    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text>{`${item.title} ${item.description}`}</Text>
          )}
          keyExtractor={item => item.title}
        />
      </View>
    );
    // <About />; // TODO: restore to original after refactoring view code away
  }
}

export default AboutContainer;
