import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
var axios = Axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YmYxYWJkNzdiY2I2MTEwOGVlM2U4MSIsInByb2ZpbGUiOnsibmFtZSI6IkRlbm5pcyBQbG90bmlrIn0sImlhdCI6MTQ3MjE0MjAyNH0.2avZgwV8ph2ZMzc-4ZRdZR495iRTGfaGzzk3aMnHZRc'
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