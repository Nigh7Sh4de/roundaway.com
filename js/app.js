import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import spotReducer from './reducers/spotReducer';
import App from './containers/App';

const reducers = combineReducers({
    spots: spotReducer
})

const store = createStore(reducers);

window.store = store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mainview')
);