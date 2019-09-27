import HeaderPane from '../includes/headerPane';
import chatActions from '../../actions/chatActions';

const JoinWindow = ({room, participants, description}) => {
    const{joinRoom} = chatActions();

    return (
        <div className='join-window'> 
            <HeaderPane title={room} />
            <p className='join'>Join the {room} chatroom, it has {participants} participants. </p>
            <p> {description} </p>
            <button onClick= {() => joinRoom(room) } className='btn btn-primary' > Join </button>

            <style jsx>{`
                h1 {
                    text-align: center;
                    color:#424242;
                }
                .join {
                    margin-top: 30%;
                }
                p {
                    text-align: center;
                    color:#424242;
                }
                button {
                    margin:auto;
                    display: block;
                }
            `}</style>
        </div>
    )
}
export default JoinWindow;