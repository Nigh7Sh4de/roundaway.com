import { combineReducers, createStore, applyMiddleware } from 'redux';

const spotController = (state = [], action) => {
    switch (action.type) {
        case 'GET_SPOTS': {

        }
    }
    return state;
}

const controllers = combineReducers({
    spots: spotController
})

const store = createStore(controllers, {}, applyMiddleware(ReduxFetch));

// $http.defaults.headers.common.Authorization = 'JWT ' + roundaway.config.DEFAULT_JWT;

module.exports = store;
