import React, { Component } from "react";
import axios from "axios";

export default class MovieDetail extends Component {
    state = {
        movie: {},
    };

    componentDidMount() {
        const { params } = this.props.match;
        axios({
            method: "GET",
            url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${params.movieId}`,
        })
            .then((res) =>
                this.setState({
                    movie: res.data.content,
                })
            )
            .catch((err) => console.log(err));
    }

    renderCinemaGroup = () =>
        this.state.movie.heThongRapChieu?.map((cinema) => (
            <a
                key={cinema.maHeThongRap}
                className="nav-link mb-1"
                id="v-pills-home-tab"
                data-toggle="pill"
                href={`#${cinema.maHeThongRap}`}
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
            >
                {cinema.tenHeThongRap}
            </a>
        ));

    renderShowTime = () =>
        this.state.movie.heThongRapChieu?.map((cinema) => (
            <div
                key={cinema.tenHeThongRap}
                className="tab-pane fade show"
                id={cinema.maHeThongRap}
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
            >
                {cinema.cumRapChieu.map((cinemaItem) => (
                    <p className={`${cinemaItem.maCumRap}`}>
                        {cinemaItem.tenCumRap}
                    </p>
                ))}
            </div>
        ));

    render() {
        const { movie } = this.state;
        // console.log(movie);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img
                            className="img-fluid"
                            src={movie.hinhAnh}
                            alt={movie.biDanh}
                        />
                    </div>
                    <div className="col-6">
                        <h3>{movie.tenPhim}</h3>
                        <p>{movie.moTa}</p>
                    </div>
                </div>
                <hr />
                <h2>Schedule information</h2>
                <hr />
                <div className="container">
                    <div className="row">
                        <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            {this.renderCinemaGroup()}
                        </div>
                        <div className="col-6">
                            <div
                                className="tab-content"
                                id="v-pills-tabContent"
                            >
                                {this.renderShowTime()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
