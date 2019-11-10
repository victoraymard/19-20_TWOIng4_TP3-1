import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const Nav = () => (
    <div>
        <ul>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
);

const MonApp = {function(){alert('click');}};
const HomePage = () => <h1>Home Page</h1>;
const AboutPage = () => <h1>About Page</h1>;


/*
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <Router>


                <div>
                    <Nav />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </div>
            </Router>
        );
    }
}
*/
render(<App />, document.getElementById('root'));
