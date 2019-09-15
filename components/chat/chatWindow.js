import React from 'react';
import MessageField from './messageField';
import Messages from './messages';
import HeaderPane from '../includes/headerPane';

const ChatWindow = () => {
    return (
        <div className='chat-window'> 
            <div className='title'> 
                <HeaderPane title='General' img='static/defavatar.png' />
            </div>
            <div className='message-list'> 
                <Messages  />
            </div>
            <div className='message-field' >
                <MessageField />
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