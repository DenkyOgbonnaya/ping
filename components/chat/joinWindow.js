import HeaderPane from '../includes/headerPane';
const JoinWindow = ({room, participants}) => {
    return (
        <div> 
            <HeaderPane title={room} />
            <p>Join the {room} chatroom, it has {participants} participants. </p>
            <button className='btn btn-primary' > Join </button>

            <style jsx>{`
                h1 {
                    text-align: center;
                    color:#424242;
                }
                p {
                    text-align: center;
                    margin-top: 30%;
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