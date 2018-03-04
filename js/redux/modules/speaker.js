const SPEAKER_GET_LOADING = "SPEAKERS_GET_LOADING";
const SPEAKER_GET_DATA = "SPEAKERS_GET_DATA";
const SPEAKER_GET_ERROR = "SPEAKERS_GET_ERROR";

// Action creators

export const speakerGetLoading = () => ({
	type: SPEAKER_GET_LOADING
});

export function speakerGet(speakersData) {
	return {
		type: SPEAKER_GET_DATA,
		payload: speakersData
	};
}

export const speakerGetError = err => ({
	type: SPEAKER_GET_ERROR,
	payload: err
});

// State

const initialState = {
	isLoading: false,
	speakerData: [],
	errorMessage: ""
};

// Reducers

export default (state = initialState, action) => {
	switch (action.type) {
	case SPEAKER_GET_LOADING:
		return {
			...state,
			isLoading: true
		};
	case SPEAKER_GET_DATA:
		return {
			...state,
			speakerData: action.payload,
			isLoading: false
		};
	case SPEAKER_GET_ERROR:
		return {
			...state,
			errorMessage: action.error,
			isLoading: false
		};
	default:
		return state;
	}
};

// async action creator

export const fetchSpeakerData = speakerID => {
	return dispatch => {
		dispatch(speakerGetLoading());

		// sample endpoint from slides:
		// https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="-KZ2o1CzG5GOfmURNSUB"

		fetch(
			`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`
		)
			.then(resp => resp.json())
			.then(data => {
				dispatch(speakerGet(data));
			})
			.catch(err => {
				dispatch(speakerGetError(err));
			});
	};
};
