import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";
import AboutReducer from "./modules/about";
import FavesReducer from "./modules/faves";
import SessionsReducer from "./modules/sessions";
import SpeakerReducer from "./modules/speaker";

export default combineReducers({
	navigation: NavigationReducer,
	about: AboutReducer,
	faves: FavesReducer,
	sessions: SessionsReducer,
	speaker: SpeakerReducer
});
