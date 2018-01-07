// state = null is a default value instead of undefined

export default (state = null, action) => {
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};