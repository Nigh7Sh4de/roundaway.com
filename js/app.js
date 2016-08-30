import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import config from './config';
import thunk from 'redux-thunk';
import Axios from 'axios';
var axios = Axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        Authorization: 'JWT ' + config.DEFAULT_JWT
    }
})
import { combineReducers, createStore, applyMiddleware } from 'redux';
import spotReducer from './reducers/spotReducer';
import App from './containers/App';

const reducers = combineReducers({
    spots: spotReducer
})

const store = createStore(reducers, {}, applyMiddleware(thunk));

// window.getState = store.getState;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mainview')
);

export function getSpots() {
    store.dispatch((dispatch) => {
        dispatch({type: 'GET_SPOTS'});
        axios.get('/api/spots')
        .then((payload) => {
            dispatch({type: 'GET_SPOTS', payload: payload.data.data});
        })
        .catch((err) => {
            dispatch({type: 'GET_SPOTS', error: err});
        })
    })
}