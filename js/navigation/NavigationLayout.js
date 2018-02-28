import React, { Component } from "react";
import Router from "./Routes";
import { Text } from "react-native";

import {
  StackNavigation as StackNav,
  TabNavigation as TabNav,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles.js";
const { black, white, red, purple, mediumGrey } = colors;

class NavigationLayout extends Component {
  render() {
    return (
      <TabNav
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={black}
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected, iconName) =>
            this.renderIcon(isSelected, "calendar")
          }
        >
          <StackNav
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected, iconName) =>
            this.renderIcon(isSelected, "heart")
          }
        >
          <StackNav
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected, iconName) =>
            this.renderIcon(isSelected, "information-circle")
          }
        >
          <StackNav
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNav>
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMain,
          color: isSelected ? white : mediumGrey
        }}
      >
        {title}
      </Text>
    );
  }

  renderIcon(isSelected, iconName) {
    return (
      <Icon
        name={`ios-${iconName}`}
        size={24}
        // ios={`ios-${iconName}`}
        // md={`md-${iconName}`}
        color={isSelected ? white : mediumGrey}
      />
    );
  }
}

export default NavigationLayout;
