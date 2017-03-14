'use strict';

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import MainComponent from './components/main-component';

import reducers from './reducers/index'


// const logger = (store) => (next) => (action) => {
//     console.log('Action fired', action);
// }
//const middleware = applyMiddleware(logger()); 
//const store = createStore(reducers, middleware);
const store = createStore(reducers);
// store.subscribe(()=> {
    
// })

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
        	   <MainComponent/>
            </Provider>
        );
    }
}

export default App;
