import { getFaves as realmGetFaves } from "../../config/models";
import realm from "../../config/models";

const FAVE = "FAVE";
const UNFAVE = "UNFAVE";
const FAVES_GET = "FAVES_GET";

// Action creators

export const fave = id => ({
	type: FAVE,
	payload: id
});

export const unFave = id => ({
	type: UNFAVE,
	payload: id
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
		state.faves.push(action.payload);
		return {
			...state,
			faves: [...state.faves]
		};

	case UNFAVE:
		return {
			...state,
			faves: [...state.faves.filter(fave => fave !== action.payload)]
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

// async action creators

export const addFave = id => {
	return dispatch => {
		realm.write(() => {
			realm.create("Fave", {
				id: id,
				faved_on: new Date()
			});
			dispatch(fave(id));
		});
	};
};

export const removeFave = id => {
	return dispatch => {
		realm.write(() => {
			const toDelete = realm.objects("Fave").filtered("id == $0", id);
			realm.delete(toDelete);
			dispatch(unFave(id));
		});
	};
};

export const fetchFaves = () => {
	return dispatch => {
		dispatch(favesGet());
	};
};
