import { SET_LIST_MOVIE } from "redux/constants/movieConstant";

export const actSetMovieList = (listMovie) => ({
    type: SET_LIST_MOVIE,
    payload: listMovie,
});
