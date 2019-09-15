import React, {useState, useContext} from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/authContext";

const Messages = () => {
    const{chatData} = useContext(ChatContext);
    const{authData} = useContext(AuthContext);

    const{selectedRoom} = chatData;
    const{currentUser} = authData;
    
    const displayMessage = message => {
        if(message.sender === currentUser.nickname)
            return (
            <li className='user' > 
                <div> 
                    <div className='text'> {message.text} <small> 9:50 </small> </div>
                </div>
            </li> )
        else if(message.sender !== currentUser.nickname)
            return(
                <li className='participant' > 
                    <div> 
                        <p> {message.sender} </p>
                        <div className='text'> {message.text} <small> 9:50 </small> </div>
                                        
                    </div>
                </li>
            )
        else
        return (
            <li className='event' > 
                    <p> mike left </p>
            </li>
        )
    }
    
    return (
        <div> 
            <div className= 'messages'> 
                <p className='date'> <small className='text-muted' >{new Date().toDateString()} </small> </p>
                <ul className = 'message-list' > 
                    {
                        selectedRoom.chatHistory.map(message => 
                            <div key= {message._id} className='message' >
                                { 
                                    message.sender === currentUser.nickname ?
                                    <li className='user' > 
                                        <div> 
                                        <div className='text'> {message.text} <small> 9:50 </small> </div>
                                        </div>
                                    </li> :
                                        message.sender === 'Jennis' ? <li className='event' > <small className='text-muted' > {message.text} </small> </li> :
                                    <li className='participant' > 
                                        <div> 
                                            <p> {message.sender} </p>
                                            <div className='text'> {message.text} <small> 9:50 </small> </div>
                                                        
                                        </div>
                                    </li>
                                }
                                
                            </div>
                        )
                    }
                </ul>
            </div>
            <style jsx >{`
                .message-list {
                    display:flex;
                    flex-direction: column;
                    list-style: none
                }
                .user {
                    float: right;
                    background: #0048AA;
                    color: white;
                    max-width: 80%;
                    padding: 10px;
                    border-radius:20px 0px 20px 10px;
                }
                .participant {
                    float: left;
                    background: #eceff1;
                    color: #212121;;
                    max-width: 80%;
                    border-radius:0px 20px 10px 20px;
                    padding: 10px;
                }
                .event {
                    text-align: center;
                }
                .message {
                    margin-top: 20px
                }
                .date {
                    text-align: center;
                }
                .text {
                    display: flex:
                }
            `} </style>
        </div>
    )
}

export default Messages;