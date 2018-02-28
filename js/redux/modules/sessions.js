import { formatSessionData } from "../helpers/sessionsHelper";

const SESSIONS_GET_LOADING = "SESSIONS_GET_LOADING";
const SESSIONS_GET_DATA = "SESSIONS_GET_DATA";
const SESSIONS_GET_ERROR = "SESSIONS_GET_ERROR";

// Action creators

export const sessionsGetLoading = () => ({
  type: SESSIONS_GET_LOADING
});

export function sessionsGet(sessionsData) {
  return {
    type: SESSIONS_GET_DATA,
    payload: sessionsData
  };
}

export const sessionsGetError = err => ({
  type: SESSIONS_GET_ERROR,
  payload: err
});

// State

const initialState = {
  isLoading: undefined,
  sessionsData: [],
  errorMessage: ""
};

// Reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case SESSIONS_GET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SESSIONS_GET_DATA:
      return {
        ...state,
        sessionsData: action.payload,
        isLoading: false
      };
    case SESSIONS_GET_ERROR:
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

export const fetchSessionsData = () => {
  return dispatch => {
    dispatch(sessionsGetLoading());

    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(res => res.json())
      .then(data => {
        dispatch(sessionsGet(formatSessionData(data)));
      })
      .catch(err => {
        dispatch(sessionsGetError(err));
      });
  };
};
