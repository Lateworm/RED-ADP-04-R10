import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import About from "./About";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [] // future home of Code of Conduct data
    };
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    // TODO: abstract this to a reducer?
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <About data={this.state.data} />
      </View>
    );
  }
}

export default AboutContainer;
