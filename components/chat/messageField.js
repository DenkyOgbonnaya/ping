import React, {useState } from 'react';
import { typing, stopTyping } from '../../actions/socket';
import useChatConText from '../lib/useChatContext';
const MessageField = ({handleSend}) => {
    const[message, setMessage] = useState('');
    const[isTyping, setIsTyping] = useState(false);
    const {selectedRoom} = useChatConText().chatData

    const handleTimeout = () => {
        setIsTyping(false);
        stopTyping(selectedRoom.name);
    }
    const handleTyping = () => {
        let timeout = undefined;
        if(!isTyping){
            setIsTyping(true);
            typing(selectedRoom.name)
            timeout = window.setTimeout(handleTimeout, 1000);
        }else {
            window.clearTimeout(timeout);
            window.setTimeout(handleTimeout, 1000);
        }
    }

    const onSendClicked = () => {
        if(message){
            handleSend(message);
            setMessage('');
        }
    }
    return (
        <div className="input-group mb-3 message-field">
        <textarea
            type="textarea" 
            name='message' 
            value={message} 
            onChange= {e => setMessage(e.target.value)} 
            rows='1'
            onKeyUp={e => {
                e.keyCode !== 13 && handleTyping();
              }}
              onKeyDown={e => {
                e.keyCode === 13 && onSendClicked();
              }}
            className="form-control" 
            placeholder="Type message..."
            aria-label="message" aria-describedby="button-addon2" >
            </textarea>
        <div className="input-group-append">
          <button onClick= {onSendClicked } className="btn btn-primary"  type="button" id="button-addon2">Send</button>
        </div>
        <style jsx>{`
            input {
                border-radius: 10px;
                background: #eceff1;
                bottom: 0;
            }
            input::placeholder {
                color: #424242;
            }
        `}</style>
      </div>

    )
}

export default MessageField;