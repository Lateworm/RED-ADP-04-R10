/**
 * R10 App
 * https://github.com/Lateworm/RED-ADP-04-R10
 */

import React, { Component } from "react";
import { Provider } from "react-redux";

import {
	StackNavigation as StackNav,
	NavigationContext as NavContext,
	NavigationProvider as NavProvider
} from "@expo/ex-navigation";

const navContext = new NavContext({
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
				<NavProvider context={navContext}>
					<StackNav
						id="root"
						navigatorUID="root"
						initialRoute={Router.getRoute("layout")}
					/>
				</NavProvider>
			</Provider>
		);
	}
}
