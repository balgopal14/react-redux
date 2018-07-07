import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {default as Button} from './containers/ActionButton/button';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Button} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App