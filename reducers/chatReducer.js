const chatReducer = (state, action) => {
    switch(action.type){
        case 'SELECTROOM': 
            return {
                ...state,
                selectedRoom: action.room,
                isRoomSelected: true
        }
        default: return state;
        
    }
}

export default chatReducer;