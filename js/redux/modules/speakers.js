const SPEAKERS_GET_LOADING = "SPEAKERS_GET_LOADING";
const SPEAKERS_GET_DATA = "SPEAKERS_GET_DATA";
const SPEAKERS_GET_ERROR = "SPEAKERS_GET_ERROR";

// Action creators

export const speakersGetLoading = () => ({
  type: SPEAKERS_GET_LOADING
});

export function speakersGet(speakersData) {
  return {
    type: SPEAKERS_GET_DATA,
    payload: speakersData
  };
}

export const speakersGetError = err => ({
  type: SPEAKERS_GET_ERROR,
  payload: err
});

// State

const initialState = {
  isLoading: undefined,
  speakersData: [],
  errorMessage: ""
};

// Reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case SPEAKERS_GET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SPEAKERS_GET_DATA:
      return {
        ...state,
        speakersData: action.payload,
        isLoading: false
      };
    case SPEAKERS_GET_ERROR:
      return {
        ...state,
        errorMessage: action.error,
        isLoading: "error"
      };
    default:
      return state;
  }
};

// async action creator

export const fetchSpeakersData = () => {
  return dispatch => {
    dispatch(speakersGetLoading());

    fetch("https://r10app-95fea.firebaseio.com/speakers.json")
      .then(res => res.json())
      .then(data => {
        dispatch(speakersGet(data));
      })
      .catch(err => {
        dispatch(speakersGetError(err));
      });
  };
};
