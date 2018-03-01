import React, { Component } from "react";
import Router from "./Routes";
import { StyleSheet, Text, View } from "react-native";

import {
	StackNavigation as StackNav,
	DrawerNavigation as DrawerNav,
	DrawerNavigationItem as DrawerItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles.js";
const { black, white, mediumGrey } = colors;

class NavigationLayout extends Component {
	render() {
		return (
			<DrawerNav
				id="main"
				navigatorUID="main"
				initialItem="about"
				drawerWidth={300}
				renderHeader={this._renderHeader}
			>
				<DrawerItem
					id="schedule"
					// title="Schedule"
					renderTitle={isSelected => this.renderTitle(isSelected, "Schedule")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={(isSelected, iconName) =>
						this.renderIcon(isSelected, "calendar")
					}
				>
					<StackNav
						id="schedule"
						navigatorUID="schedule"
						initialRoute={Router.getRoute("schedule")}
					/>
				</DrawerItem>
				<DrawerItem
					id="faves"
					// title="Faves"
					renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={(isSelected, iconName) =>
						this.renderIcon(isSelected, "heart")
					}
				>
					<StackNav
						id="faves"
						navigatorUID="faves"
						initialRoute={Router.getRoute("faves")}
					/>
				</DrawerItem>
				<DrawerItem
					id="about"
					// title="About"
					renderTitle={isSelected => this.renderTitle(isSelected, "About")}
					selectedStyle={styles.selectedItemStyle}
					renderIcon={(isSelected, iconName) =>
						this.renderIcon(isSelected, "information-circle")
					}
				>
					<StackNav
						id="about"
						navigatorUID="about"
						initialRoute={Router.getRoute("about")}
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
					color: isSelected ? black : mediumGrey
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

const styles = StyleSheet.create({
	header: {
		height: 20
	},

	selectedItemStyle: {
		backgroundColor: "blue"
	},

	titleText: {
		fontWeight: "bold"
	},

	selectedTitleText: {
		color: "white"
	}
});

export default NavigationLayout;
