import {
  LIST_FILM_PENDING,
  LIST_FILM_SUCCESS,
  LIST_FILM_ERROR,
  LIST_PEOPLE_PENDING,
  LIST_PEOPLE_SUCCESS,
  LIST_PEOPLE_ERROR,
} from "../actions/film_action";

const initialState = {
  pending: false,
  error: null,
};

export function listFilm(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case LIST_FILM_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_FILM_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LIST_FILM_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function listPeople(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case LIST_PEOPLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_PEOPLE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LIST_PEOPLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
