import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { actSetMovieList } from "redux/actions/movieAction";
import { getListMovieSelector } from "redux/selectors/movieSelector";

class Home extends Component {
    componentDidMount() {
        console.log("did mount");
        axios({
            method: "GET",
            url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=12",
        })
            .then((res) => {
                this.props.setMovieList(res.data.content.items);
            })
            .catch((err) => console.log(err));
    }

    renderListMovie = () =>
        this.props.listMovie.map((movie) => (
            <div className="col-3 card" key={movie.maPhim}>
                <img
                    className="card-img-top"
                    src={movie.hinhAnh}
                    alt={movie.biDanh}
                />
                <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <p className="card-text text-truncate">{movie.moTa}</p>
                    <Link
                        className="btn btn-info"
                        to={`/movie-detail/${movie.maPhim}`}
                    >
                        View detail
                    </Link>
                </div>
            </div>
        ));

    render() {
        console.log("render run");
        console.log(this.props.listMovie);

        return (
            <div className="container">
                <div className="row">{this.renderListMovie()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => getListMovieSelector;

const mapDispatchToProps = (dispatch) => ({
    setMovieList: (listMovie) => dispatch(actSetMovieList(listMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
