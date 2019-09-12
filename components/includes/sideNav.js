import React, {useContext} from 'react';
import { ChatContext } from '../../context/chatContext';
import { setRoomSelected } from '../../actions/chatActions';

const SideNav = () => {
    const{chatData, dispatchChat} = useContext(ChatContext)
    return(
    <div className='sidenav' > 
        <ul> 
            {
                chatData.chatRooms.map((room, i) => 
                    <li key={i} onClick = {e => setRoomSelected(room, dispatchChat)} >{room} </li>
                )
            }
        </ul>
        < style jsx>{`
        .sidenav {
            background: #212121;
            color: #ccc;
            height: 100vh
        }
        ul {
            list-style: none
        }
        ul li {
            border: 1px solid #ccc
        }
        ul li :hover {
            background: grey
        }
        `} </style>
    </div>
    )
}

export default SideNav;