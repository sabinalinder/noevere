import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// TODO: import this from assets/img
import logo from './logo.png';

class Header extends Component {
    render() {
        return (
            <header className="site-header" role="banner">
                <div className="site-header__inner">
                    <div className="site-header__logo">
                        <Link to="/" className="site-logo">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="site-header__menu">
                        <nav className="primary-menu">
                            <ul className="menu">
                                <li className="menu__item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/About">About me</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="site-header__social">
                        <ul className="social">
                            <li className="social__item social__item--facebook">
                                <Link to="#">F</Link>
                            </li>
                            <li className="social__item social__item--instagram">
                                <Link to="#">I</Link>
                            </li>
                            <li className="social__item social__item--linkedin">
                                <Link to="#">in</Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="#" className="toggle-menu toggle-menu--site js-toggle-menu">
                        <span className="toggle-menu__line"></span>
                        <span className="toggle-menu__line"></span>
                        <span className="toggle-menu__line"></span>
                    </Link>

                </div>
            </header>
        )
    }
}

export default Header;
