import About from "../scenes/About";
import Faves from "../scenes/Faves";
import Schedule from "../scenes/Schedule";
import Sessions from "../scenes/Sessions";
import Speakers from "../scenes/Speakers";

import NavigationLayout from "./NavigationLayout";

import { createRouter } from "@expo/ex-navigation";

const Router = createRouter(() => ({
	layout: () => NavigationLayout,

	about: () => About,
	faves: () => Faves,
	schedule: () => Schedule,
	session: () => Sessions,
	speakers: () => Speakers
}));

export default Router;
