import { styles } from "ansi-colors";

const ChatList = ({chatList, setChatSelected}) => {
    return(
        <div> 
            <ul className='nav flex-column nav-pills' > 
            {
                chatList.map((chat, i) => 
                    <div key={i}>
                    <li 
                        className='nav-item' 
                        onClick = {e => setChatSelected(chat)} >
                        <img src='static/defavatar.png' alt='pIX' /> {" "}
                        {chat} 
                    </li>
                    <hr />
                    </div>
                )
            }
        </ul>
        <style jsx >{`
            li > img {
                height: 50px;
                width: 50px;
                border-radius: 100%;
                
            }
            li {
                font-size : 18px;
                padding: 5px;
            }
            li :hover {
                cursor: pointer;
            }
            hr {
                border-color: #424242;
                border-height: 1px;
            }
        `} </style>
        </div>
    )
}
export default ChatList;