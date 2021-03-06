import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import episodesReducer from "./episodesReducer";

const reducer = combineReducers({
  episodes: episodesReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
