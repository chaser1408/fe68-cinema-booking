import { SET_LIST_MOVIE } from "redux/constants/movieConstant";

const initialState = {
    listMovie: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LIST_MOVIE: {
            state.listMovie = payload;
            console.log(payload);
            return { ...state };
        }

        default:
            return state;
    }
};

export default movieReducer;
