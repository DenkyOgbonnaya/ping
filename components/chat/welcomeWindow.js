import React from 'react';
import HeaderPane from '../includes/headerPane';

const WelcomeWindow = () => {
    return(
        <div> 
            <HeaderPane title='CHAT UP' />
            <p>Welcome to Chatup instant messanger!. Join a room to start ChattIng. </p>

            <style jsx>{`
                p {
                    text-align: center;
                    margin-top: 30%;
                    color:#424242;
                }
            `}</style>
        </div>
    )
}

export default WelcomeWindow