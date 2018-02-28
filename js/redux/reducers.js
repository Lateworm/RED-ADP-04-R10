import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";

import AboutReducer from "./modules/about";
// import FavesReducer from './modules/faves';
import ScheduleReducer from "./modules/schedule";
import SessionsReducer from "./modules/sessions";
// import SpeakersReducer from './modules/speakers';

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  // faves: FavesReducer,
  schedule: ScheduleReducer,
  sessions: SessionsReducer
  // speakers: SpeakersReducer,
});
