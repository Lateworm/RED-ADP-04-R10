/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

import Store from "./redux/store";
import Router from "./navigation/Routes";

// import Routes

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("layout")} />
        </NavigationProvider>
      </Provider>
    );
  }
}
