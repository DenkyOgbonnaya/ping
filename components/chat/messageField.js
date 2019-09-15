
const MessageField = () => {
    return (
        <div className="input-group mb-3 message-field">
        <input type="text" className="form-control" placeholder="Type message..."
            aria-label="message" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-primary"  type="button" id="button-addon2">Send</button>
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