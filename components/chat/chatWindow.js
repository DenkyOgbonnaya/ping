import React from 'react';
import MessageField from './messageField';
import Messages from './messages';

const ChatWindow = () => {
    return (
        <div className='chat-window'> 
            <div className='message-list'> 
                <Messages  />
            </div>
            <div className='message-field'>
                <MessageField />
            </div>

            <style jsx>{`
                .message-field {
                    position: fixed;
                    z-index: 2;
                }
            `} </style>
            <style global >{`
                body {
                    background: grey
                }
            `}</style>
        </div>
    )
}

export default ChatWindow;