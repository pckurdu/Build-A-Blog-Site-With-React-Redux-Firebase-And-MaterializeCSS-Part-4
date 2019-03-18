import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//createStore import code
//to use the middleware structure
import {createStore,applyMiddleware} from 'redux';
//to use the thunk structure
import thunk from 'redux-thunk';

 

import rootReducer from './store/reducers/rootReducer';

import {Provider} from 'react-redux';

//We create a store using createStore.
//Let's give  reducer as parameter
//store, thunk will be used to provide information
const store=createStore(rootReducer,applyMiddleware(thunk));

//In store attribute, we place the store that we created.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
