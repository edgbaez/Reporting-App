export default function(state = {}, action) {
    switch(action.type) {
        case 'ALLFILES':
            return action.payload;
        default:
            return state;
    }
};