import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import config from './config';
import thunk from 'redux-thunk';
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
