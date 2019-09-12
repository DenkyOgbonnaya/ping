import rooms from "./chatroom";

export const setRoomSelected = (room, dispatch) => {
    dispatch({
        type: 'SELECTROOM',
        room: rooms[room]
    })
}