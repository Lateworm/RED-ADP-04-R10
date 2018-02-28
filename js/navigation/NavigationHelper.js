import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Routes from "../navigation/Routes";

// https://red-adp.herokuapp.com/lesson/02-navigation-and-dependencies/
export const goToSession = (currentNavigatorUID, sessionsData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Routes.getRoute("sessions", { sessionsData })
    )
  );
};
