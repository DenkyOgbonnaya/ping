import rooms from "./chatroom";

export const setRoomSelected = (room, dispatch) => {
    dispatch({
        type: 'SELECTROOM',
        room: rooms[room]
    })
}
export const toggleIsVisibleSidebar = (dispatch) => {
    dispatch({
        type: 'TOGGLE_ISVISIBLE_SIDEBAR',
    })
}
