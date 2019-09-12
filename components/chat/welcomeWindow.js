import React from 'react';

const WelcomeWindow = () => {
    return(
        <div> 
            <h1> CHAT UP </h1>
            <p>Welcome to Chatup instant messanger!. Join a room to start ChattIng. </p>

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

export default WelcomeWindow