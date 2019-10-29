import React from "react";
import useChatConText from "../lib/useChatContext";
import useAuthConText from "../lib/useAuthContext";
import { formatTime } from "./helper";


const Messages = () => {
    const{chatData} = useChatConText();
    const{authData} = useAuthConText();

    const{selectedRoom} = chatData;
    const{nickname} = authData;
    const COLORS = [
        "#e21400",
        "#91580f",
        "#f8a700",
        "#f78b00",
        "#58dc00",
        "#287b00",
        "#a8f07a",
        "#4ae8c4",
        "#3b88eb",
        "#3824aa",
        "#a700ff",
        "#d300e7"
      ];
      const getColor = username => {
        let hash = 7;
        for (let i = 0; i < username.length; i++) {
          hash = username.charCodeAt(i) + (hash << 5) - hash;
        }
        let index = Math.abs(hash % COLORS.length);
        return COLORS[index];
      };
    return (
        <div> 
            <div className= 'messages'> 
                <p className='date'> <small className='text-muted' >{new Date().toDateString()} </small> </p>
                <ul className = 'message-list' > 
                    {
                       selectedRoom.messages.map(message => 
                            <div key= {message._id} className='message' >
                                { 
                                    message.sender === nickname ?
                                    <li className='user' > 
                                        <div> 
                                        <div className='text'> {message.text}  <small className='user-time' > {formatTime(message.time)} </small> </div>
                                        </div>
                                    </li> :
                                        message.sender === 'log' ? <li className='log' > <small className='text-muted' > {message.text} </small> </li> :
                                    <li className='participant' > 
                                        <div> 
                                        <h6 className='participant-name' style={{ color: `${getColor(message.sender)}` }}> {message.sender} </h6>
                                            <div className='text'> {message.text} <small className='participant-time'> {formatTime(message.time)} </small> </div>
                                                        
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
                    list-style: none;
                    width: 100%
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
                    border-radius: 0px 20px 10px 20px;
                    padding: 10px;
                }
                .log {
                    text-align: center;
                }
                .message {
                    margin-top: 5px
                }
                .date {
                    text-align: center;
                }
                .text {
                    display: flex:
                }
                .user-time {
                    margin-left: 5px;
                    color: #ccc
                }
                .participant-time {
                    margin-left: 5px;
                    color: #424242;
                }
            `} </style>
        </div>
    )
}

export default Messages;