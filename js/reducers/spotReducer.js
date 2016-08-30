const spotReducer = (state = [], action) => {
    if (action.type = 'test')
        return [...state, 
            'testing...'
        ]
    return state;
}

export default spotReducer;