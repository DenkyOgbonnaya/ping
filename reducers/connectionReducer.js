const connectionReducer = (state, action) => {
    switch(action.type) {
        case 'RECONNECTING' : 
        case 'RECONNECT_ERROR' :
            return {
                ...state,
                connected: false,
                message: action.message
            }
        case 'RECONNECT' :
            return {
                ...state,
                connected: true
            }
        default : return state;

    }
}
export default connectionReducer;