const CONDUCT_GET_LOADING = "CONDUCT_GET_LOADING";
const CONDUCT_GET_DATA = "CONDUCT_GET_DATA";
const CONDUCT_GET_ERROR = "CONDUCT_GET_ERROR";

// Action creators

export const conductGetLoading = () => ({
	type: CONDUCT_GET_LOADING
});

export const conductGet = conductData => ({
	type: CONDUCT_GET_DATA,
	payload: conductData
});

export const conductGetError = err => ({
	type: CONDUCT_GET_ERROR,
	payload: err
});

// State

const initialState = {
	isLoading: false,
	conductData: [],
	errorMessage: ""
};

// Reducers

export default (state = initialState, action) => {
	switch (action.type) {
	case CONDUCT_GET_LOADING:
		return {
			...state,
			isLoading: true
		};
	case CONDUCT_GET_DATA:
		return {
			...state,
			conductData: action.payload,
			isLoading: false
		};
	case CONDUCT_GET_ERROR:
		return {
			...state,
			errorMessage: action.payload,
			isLoading: false
		};
	default:
		return state;
	}
};

// async action creator

export const fetchConductData = () => {
	return dispatch => {
		dispatch(conductGetLoading());
		fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
			.then(res => res.json())
			.then(data => dispatch(conductGet(data)))
			.catch(err => dispatch(conductGetError(err)));
	};
};
