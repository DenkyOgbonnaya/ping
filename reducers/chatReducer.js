const chatReducer = (state, action) => {
    switch(action.type){
        case 'SELECTROOM': 
            return {
                ...state,
                selectedRoom: action.room,
                isRoomSelected: true
        }
        case 'TOGGLE_ISVISIBLE_SIDEBAR':
            return {
                ...state,
                isVisibleSidebar: !state.isVisibleSidebar
            }
        default: return state;
        
    }
}

export default chatReducer;