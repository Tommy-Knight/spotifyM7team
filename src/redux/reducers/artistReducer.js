import { initialState } from "../store";

const artistReducer = (state = initialState.artist, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "SET_ARTIST": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "SET_ID": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "SET_TRACKLIST": {
      return {
        ...state,
        tracklist: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default artistReducer;
