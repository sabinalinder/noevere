import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// TODO: import this from assets/img
import logo from './logo.png';

class Header extends Component {

    render() {
        return (
            <header role="banner">
                <div id="top-header" className="top-header">
                    <div className="top-header__logo">
                        <Link to="/" className="site-logo">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    

                    <label className="toggle-menu-wrapper" for="toggle-menu"></label>
                    <input type="checkbox" id="toggle-menu" name="toggle-menu" />
                    <span className="hamburger"></span>
                    
                    <nav id="primary-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About me</Link></li>
                        </ul>
                    </nav>

                </div>
                <div className="hero" ref="nav">
                    <div className="container container--wide">
                        <div className="grid">
                            <div className="column col-6">
                                <div className="headline">
                                    <h1>
                                        I love
                                        <span id="changeText"> tea</span>
                                        {/* <span className="is-hidden"> tea</span>
                                        <span className="is-hidden"> cats</span>
                                        <span className="is-hidden"> beautiful designs</span> */}
                                    </h1>
                                </div>
                            </div>
                            <div className="column col-6"></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
