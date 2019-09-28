import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.scss";
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

import firebase from './services/firebase';


let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
