import Axios from 'axios';
import config from './config';

var axios = Axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        Authorization: 'JWT ' + config.DEFAULT_JWT
    }
})

export function getSpots() {
    return (dispatch) => {
        dispatch({type: 'GET_SPOTS'});
        axios.get('/api/spots')
        .then((payload) => {
            dispatch({type: 'GET_SPOTS', payload: payload.data.data});
        })
        .catch((err) => {
            dispatch({type: 'GET_SPOTS', error: err});
        })
    }
}