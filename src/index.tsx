import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Home from './home/home';
import ContactUs  from './contact-us/ContactUs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<ContactUs />, document.getElementById('contactUs'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
