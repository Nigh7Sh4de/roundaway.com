import { combineReducers, createStore, applyMiddleware } from 'redux';
import Axios from 'axios';
import thunk from 'redux-thunk';
import Config from './../config.js';

const urlBase = 'http://localhost:8081';
var headers = {
    "Authorization": 'JWT ' + Config.DEFAULT_JWT
};

var axios = Axios.create({
    baseURL: urlBase,
    headers: headers
})

const spotController = (state = [], action) => {
    switch (action.type) {
        case 'GET_SPOTS': {
            if (action.err)
                console.error(err);
            if (action.payload)
                state = action.payload;
            else
                state = {...state, loading: true}
            // console.log('getting...');
            // debugger
            // fetch(urlBase + '/api/spots', {
            //     method: 'get',
            //     headers: headers
            // })
            // .then((res) => {
            //     return res.json();
            // })
            // .then((json) => {
            //     state = json.data;
            // })
            // .catch((err) => {
            //     console.error(err);
            // })
        }
    }
    return state;
}

const controllers = combineReducers({
    spots: spotController
})

const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

const middleware = applyMiddleware(thunk, logger);

const store = createStore(controllers, {}, middleware);

store.getSpots = () => {
    store.dispatch((dispatch) => {
        dispatch({type: 'GET_SPOTS'});
        axios.get('/api/spots')
            .then((response) => {
                dispatch({type: 'GET_SPOTS', payload: response.data.data});
            })
            .catch((err) => {
                dispatch({type: 'GET_SPOTS', error: err});
            })
    })
}

// $http.defaults.headers.common.Authorization = 'JWT ' + roundaway.config.DEFAULT_JWT;

module.exports = store;
