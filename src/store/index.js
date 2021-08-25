import { createStore, combineReducers } from "redux";
import movieReducer from "redux/reducers/movieReducer";

const rootReducer = combineReducers({
    movieReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
