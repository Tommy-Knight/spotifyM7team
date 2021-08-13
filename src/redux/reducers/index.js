import { initialState } from "../store";

export const favReducer = (state = initialState.favourites, { type, payload }) => {
	switch (type) {
		case "ADD_TO_FAVS":
			return { ...state, favourites: payload };

		default:
			return state;
	}
};

export const jobReducer = (state = initialState.jobs, action) => {
	switch (action.type) {
		case "FETCH_JOBS":
			return { ...state, jobs: action.payload };
		default:
			return state;
	}
};

