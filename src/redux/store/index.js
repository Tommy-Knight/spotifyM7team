import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { favReducer, jobReducer } from "../reducers";
import artistReducer from "../reducers/artistReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourites: [],
  jobs: {},
  loading: false,
  artist: {
    id: "",
    isLoading: false,
    data: null,
    tracklist: null,
  },
};

const sonicReducer = combineReducers({
  favourites: favReducer,
  jobs: jobReducer,
  artist: artistReducer,
});

export const configureStore = createStore(
  sonicReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
