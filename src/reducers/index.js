import { combineReducers } from "redux";
import { listFilm } from "./film_reducer";

const rootReducer = combineReducers({
  listFilm,
});

export default rootReducer;
