import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Routes from "./Routes";

// https://red-adp.herokuapp.com/lesson/02-navigation-and-dependencies/
export const goToSession = (currentNavigatorUID, session) => {
	Store.dispatch(
		NavigationActions.push(
			currentNavigatorUID,
			Routes.getRoute("session", { session })
		)
	);
};
