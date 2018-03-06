import {
	Fave as realmFave,
	UnFave as realmUnFave,
	getFaves as realmGetFaves
} from "../../config/models";

const FAVE = "FAVE";
const UNFAVE = "UNFAVE";
const FAVES_GET = "FAVES_GET";

// Action creators

export const fave = id => ({
	realmAction: realmFave(id),
	type: FAVE,
	payload: realmGetFaves().reduce((array, cursor) => {
		array.push(cursor.id);
		return array;
	}, [])
});

export const unFave = id => ({
	realAction: realmUnFave(id),
	type: UNFAVE,
	payload: realmGetFaves().reduce((array, cursor) => {
		array.push(cursor.id);
		return array;
	}, [])
});

export const favesGet = () => ({
	type: FAVES_GET,
	payload: realmGetFaves().reduce((array, cursor) => {
		array.push(cursor.id);
		return array;
	}, [])
});

// State

const initialState = {
	faves: []
};

// Reducers

export default (state = initialState, action) => {
	switch (action.type) {
	case FAVE:
		action.realmAction;
		return {
			...state,
			faves: action.payload
		};

	case UNFAVE:
		action.realmAction;
		return {
			...state,
			faves: action.payload
		};

	case FAVES_GET:
		return {
			...state,
			faves: action.payload
		};

	default:
		return state;
	}
};

// async action creator

export const fetchFaves = () => {
	return dispatch => {
		dispatch(favesGet());
	};
};
