/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        // console.log(this.props);
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand font-weight-bold" href="#">
                    Cinema Booking
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link font-weight-bold" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link font-weight-bold"
                                to="/theater"
                            >
                                Theater
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link font-weight-bold"
                                to="/review"
                            >
                                Review
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link font-weight-bold"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
