import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// TODO: import this from assets/img
import logo from './logo.png';
import { toggleMenuButton } from './toggleMenuButton';

class Header extends Component {

    // constructor() {
    //     super();
    // }

    /**
    * Toggle the primary menu by clicking the toggle button
    */
    toggleMenuButton() {
        toggleMenuButton();
    }

    render() {
        return (
            <header role="banner">
                <div id="top-header" className="top-header">
                    <div className="top-header__logo">
                        <Link to="/" className="site-logo">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <nav id="primary-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About me</Link></li>
                        </ul>
                    </nav>

                    <button onClick={this.toggleMenuButton} id="toggle-menu" className="toggle-menu toggle-menu--site js-toggle-menu"></button>
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
