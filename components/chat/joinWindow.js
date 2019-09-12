
const JoinWindow = ({room, participants}) => {
    return (
        <div> 
            <h1> {room} </h1>
            <p>Join the {room} chatroom, it has {participants} participants. </p>
            <button > Join </button>

            <style jsx>{`
                h1 {
                    text-align: center
                }
                p {
                    text-align: center;
                    margin-top: 30%
                }
            `}</style>
        </div>
    )
}
export default JoinWindow;