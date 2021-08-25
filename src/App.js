import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "containers/client/Home/Home";
import Theater from "containers/client/Theater/Theater";
import Review from "containers/client/Review/Review";
import About from "containers/client/About/About";

import Header from "components/Header/Header";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/theater" component={Theater} />
                    <Route path="/review" component={Review} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/movie-detail/:movieId"
                        component={MovieDetail}
                    />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

// Route path xét duyệt tất cả trong đường dẫn, do Home là / trùng với / trong
// theater => nó hiện lại Home
// movieapi.cyberlearn.vn/swagger/index.html

// axios trả về 1 promise, để ta biết gọi có thành công hoặc có error
