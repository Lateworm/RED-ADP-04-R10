import React, { Component } from "react";
import Router from "./Routes";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import {
	StackNavigation as StackNav,
	DrawerNavigation as DrawerNav,
	DrawerNavigationItem as DrawerItem
} from "@expo/ex-navigation";

// import presentation components
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { colors, typography } from "../config/styles.js";
const { white, mediumGrey, lightGrey, red, purple } = colors;

const { windowWidth } = Dimensions.get("window"); // https://facebook.github.io/react-native/docs/dimensions.html

const renderHeaderBackground = () => {
	return (
		<LinearGradient
			start={{ x: 1, y: 0 }}
			end={{ x: 0, y: 1 }}
			locations={[0, 1]}
			colors={[purple, red]}
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
			<DrawerNav
				id="main"
				navigatorUID="main"
				initialItem="about"
				drawerWidth={200}
				renderHeader={this._renderHeader}
			>
				<DrawerItem
					id="schedule"
					// title="Schedule"
					renderTitle={isSelected => this.renderTitle(isSelected, "Schedule")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={isSelected => this.renderIcon(isSelected, "calendar")}
				>
					<StackNav
						id="schedule"
						navigatorUID="schedule"
						initialRoute={Router.getRoute("schedule")}
						defaultRouteConfig={defaultRouteConfig}
					/>
				</DrawerItem>
				<DrawerItem
					id="faves"
					// title="Faves"
					renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={isSelected => this.renderIcon(isSelected, "heart")}
				>
					<StackNav
						id="faves"
						navigatorUID="faves"
						initialRoute={Router.getRoute("faves")}
						defaultRouteConfig={defaultRouteConfig}
					/>
				</DrawerItem>
				<DrawerItem
					id="about"
					// title="About"
					renderTitle={isSelected => this.renderTitle(isSelected, "About")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={isSelected =>
						this.renderIcon(isSelected, "information-circle")
					}
				>
					<StackNav
						id="about"
						navigatorUID="about"
						initialRoute={Router.getRoute("about")}
						defaultRouteConfig={defaultRouteConfig}
					/>
				</DrawerItem>
			</DrawerNav>
		);
	}

	_renderHeader = () => {
		return <View style={styles.header} />;
	};

	renderTitle(isSelected, title) {
		return (
			<Text
				style={{
					fontFamily: typography.fontMain,
					fontSize: 16,
					color: isSelected ? purple : mediumGrey
				}}
			>
				{title}
			</Text>
		);
	}

	renderIcon(isSelected, iconName) {
		return (
			<Icon
				style={styles.icon}
				name={`md-${iconName}`}
				size={24}
				color={isSelected ? purple : mediumGrey}
			/>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 8
	},

	icon: {
		marginRight: 10
	},

	selectedItemStyle: {
		backgroundColor: lightGrey
	}
});

export default NavigationLayout;
