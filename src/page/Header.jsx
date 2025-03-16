import React from 'react';
import { Link, NavLink}  from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg container">
                <Link className="navbar-brand" to="/">
                    <img src="assets/image/logo1.JPG" alt="logo" style={{ width: 111 }} /> <br />
                    <img src="assets/image/logo2.JPG" alt="logo" style={{ width: 111 }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category" >
                                Category
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/top-products" >
                                Top Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/faqs" >
                                FAQs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://instagram.com">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://facebook.com">
                                <i className="fab fa-facebook" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning btn-sm">
                                <i className="fas fa-user-plus" /> Sign Up
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light btn-sm ml-lg-2">
                                <i className="fas fa-sign-in-alt" /> Login
                            </button>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                <i className="fas fa-shopping-cart" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
