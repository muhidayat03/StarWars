import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";

export const LIST_FILM_PENDING = "LIST_FILM_PENDING";
export const LIST_FILM_SUCCESS = "LIST_FILM_SUCCESS";
export const LIST_FILM_ERROR = "LIST_FILM_ERROR";

export const LIST_PEOPLE_PENDING = "LIST_FILM_PENDING";
export const LIST_PEOPLE_SUCCESS = "LIST_FILM_SUCCESS";
export const LIST_PEOPLE_ERROR = "LIST_FILM_ERROR";

const LIST_FILM_URL = "films";
const LIST_PEOPLE_URL = "people";

export function listFilm(id = "") {
  return async (dispatch) => {
    dispatch(actionPending(LIST_FILM_PENDING));
    try {
      const response = await API.get(`${LIST_FILM_URL}/${id}`);
      console.log("ini resposen", response);
      dispatch(actionSuccess(LIST_FILM_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(LIST_FILM_ERROR, error));
      console.log("ini error", error);
    }
  };
}
export function listPeople(id = "") {
  return async (dispatch) => {
    dispatch(actionPending(LIST_PEOPLE_PENDING));
    try {
      const response = await API.get(`${LIST_PEOPLE_URL}/${id}`);
      console.log("ini resposen", response);
      dispatch(actionSuccess(LIST_PEOPLE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(LIST_PEOPLE_ERROR, error));
      console.log("ini error", error);
    }
  };
}
