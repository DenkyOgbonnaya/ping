import HeaderPane from '../includes/headerPane';
import chatActions from '../../actions/chatActions';

const JoinWindow = ({room, participants, description}) => {
    const{joinRoom} = chatActions();

    return (
        <div className='container join-window'> 
            <HeaderPane title={room} />
            <br />
            <div className='jumbotron'>
            <div className='logo'>
                <img src='static/cool_ic.png' alt='logo' />
                <h3>Ping </h3>
            </div>
            <p className='join'>Join the {room} chatroom, it has {participants} participants. </p>
            <p> {description} </p>
            <button onClick= {() => joinRoom(room) } className='btn btn-primary' > Join chat </button>
            </div>
            <style jsx>{`
                .join {
                    margin-top: 10%;
                }
                p {
                    text-align: center;
                    color:#424242;
                }
                button {
                    margin:auto;
                    display: block;
                }
                h3 {
                    color: #0048AA;
                }
                .logo > img {
                    margin-left: 15px;
                }
                .jumbotron {
                    background: #fafafa;
                }
            `}</style>
        </div>
    )
}
export default JoinWindow;