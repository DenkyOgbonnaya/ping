import React, {useState, useContext} from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/authContext";

const Messages = () => {
    const{chatData} = useContext(ChatContext);
    const{authData} = useContext(AuthContext);

    const{selectedRoom} = chatData;
    const{currentUser} = authData;
    
    return (
        <div> 
            <div className= 'messages'> 
                <div> <h3>{selectedRoom.name} </h3> </div>
                <ul className = 'message-list' > 
                    {
                        selectedRoom.chatHistory.map(message => 
                            <div key= {message._id} className='message' >
                                { 
                                message.sender === currentUser.nickname ? 
                                    <li className='user' > 
                                        <div> 
                                            <p> {message.sender} </p>
                                            <div> {message.text} </div>
                                        </div>
                                    </li> :
                                    <li className='participant' > 
                                    <div> 
                                        <p> {message.sender} </p>
                                        <div> {message.text} </div>
                                    </div>
                                </li>
                                }
                            </div>
                        )
                    }
                </ul>
            </div>
            <style jsx >{`
                .messages {
                    background: grey
                }
                .message-list {
                    list-style: none
                }
                .user {
                    float: right;
                    background: green;
                    color: white;
                    max-width: 200px
                }
                .participant {
                    background: white;
                    color: grey;
                    max-width: 200px
                }
                .message {
                    margin-top: 50px
                }
            `} </style>
        </div>
    )
}

export default Messages;