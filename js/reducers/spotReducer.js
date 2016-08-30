const spotReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SPOTS': {
            if (action.error)
                throw action.error;
            else if (action.payload)
                return action.payload;
            break;
        }
    }
    return state;
}

export default spotReducer;