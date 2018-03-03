import React, { Component } from "react";
import Router from "./Routes";
import { Dimensions, Text } from "react-native";

import {
	StackNavigation as StackNav,
	TabNavigation as TabNav,
	TabNavigationItem as TabItem
} from "@expo/ex-navigation";

// import presentation components
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { colors, typography } from "../config/styles.js";
const { black, white, mediumGrey, red, purple } = colors;

const { windowWidth } = Dimensions.get("window"); // https://facebook.github.io/react-native/docs/dimensions.html

const renderHeaderBackground = () => {
	return (
		<LinearGradient
			start={{ x: 0, y: 0.5 }}
			end={{ x: 1, y: 0.5 }}
			locations={[0, 1]}
			colors={[red, purple]}
			width={windowWidth}
			height={63}
		/>
	);
};

const defaultRouteConfig = {
	navigationBar: {
		tintColor: white, // colour of scene title and hamburger menu
		titleStyle: { fontFamily: typography.fontRegular },
		renderBackground: () => renderHeaderBackground() // https://github.com/expo/ex-navigation
	}
};

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
						defaultRouteConfig={defaultRouteConfig}
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
						defaultRouteConfig={defaultRouteConfig}
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
						defaultRouteConfig={defaultRouteConfig}
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
