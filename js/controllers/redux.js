import { combineReducers, createStore, applyMiddleware } from 'redux';
import Config from './../config.js';

const urlBase = 'http://localhost:8081';
var headers = {
    "Authorization": 'JWT ' + Config.DEFAULT_JWT
};

const spotController = (state = [], action) => {
    switch (action.type) {
        case 'GET_SPOTS': {
            console.log('JWT ' + Config.DEFAULT_JWT);
            fetch(urlBase + '/api/spots', {
                method: 'get',
                headers: headers
            })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                state = json.data;
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }
    return state;
}

const controllers = combineReducers({
    spots: spotController
})

const store = createStore(controllers);

// $http.defaults.headers.common.Authorization = 'JWT ' + roundaway.config.DEFAULT_JWT;

module.exports = store;
