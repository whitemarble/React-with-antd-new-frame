import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import {FormattedMessage} from 'react-intl';
import Login from '../containers/Login';

class Page extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <FormattedMessage
                id='hello'
                description='say hello to Howard.'
                defaultMessage='Hello, Howard'
                />
                <Login/>
            </div>
        );
    }
}

export default Page;