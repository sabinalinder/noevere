import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// Components
import Header from './components/header/header';
import HomePage from './components/pages/home';
import Footer from './components/footer/footer';
import About from './components/pages/about';

// Includes
import './assets/css/default.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />

                        <Route exact path='/' component={ HomePage } />
                        <Route exact path='/About' component={ About } />

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
