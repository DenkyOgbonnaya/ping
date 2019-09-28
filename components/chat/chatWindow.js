import React, {useEffect, useRef} from 'react';
import MessageField from './messageField';
import Messages from './messages';
import HeaderPane from '../includes/headerPane';
import useChatContext from '../lib/useChatContext';
import chatActions from '../../actions/chatActions';
import {registerMessageHandler, unregisterMessageHandler, registerTypingHandler, unregisterTypingHandler, unregisterStopTypingHandler, registerStopTypingHandler} from '../../actions/socket';

const ChatWindow = () => {
    const{chatData} = useChatContext();
    const chatBottom = useRef(undefined);
    const{sendMessage, handleRecievedMessage, handleTyping, handleStopTyping} = chatActions();

    const{selectedRoom} = chatData;

    useEffect( () => {
        registerMessageHandler(handleRecievedMessage);
        registerTypingHandler(handleTyping);
        registerStopTypingHandler(handleStopTyping);

        return () => {
            unregisterMessageHandler();
            unregisterTypingHandler();
            unregisterStopTypingHandler();
        }
    }, []);
    useEffect( () => {
        ( () => { 
            //scroll to chatbottom
            chatBottom.current && chatBottom.current.scrollIntoView({behavior: 'smooth'});
        } )();
    }, [selectedRoom.messages]);

    const handleSendMessage = message => {
        sendMessage(message, selectedRoom.name);
    }
    return (
        <div className='chat-window'> 
            <div className='title'> 
                <HeaderPane title={selectedRoom.name} img='static/defavatar.png' />
            </div>
            <div className='message-list'> 
                <Messages  />
            </div>
            <span ref={chatBottom}> </span>
            <div className='message-field' >
                <MessageField handleSend = {handleSendMessage} />
            </div>
            <style jsx>{`
                .chat-window {
                    position: relative;

                }
                .message-list {
                   margin-top: 80px;
                   margin-bottom: 80px;
                }
                .title {
                    width: 100%;
                    position: fixed;
                    top: 0;
                    color: #fafafa;
                }
                .message-field {
                    background: #ffffff;
                    width: 99%;
                    position: fixed;
                    bottom: 0;
                }
                @media (min-width: 768px){
                    .message-field {
                        width: 79%;
                    }
                }
            `} </style>
            
            
        </div>
    )
}

export default ChatWindow;