import React from 'react';
import HeaderPane from '../includes/headerPane';

const WelcomeWindow = () => {
    return(
        <div> 
            <HeaderPane title='Ping' />
            <br />
            <div className='jumbotron'>
            <div className='logo'>
                <img src='static/cool_ic.png' alt='logo' />
                <h3>Ping </h3>
            </div>
            <p className='welcome'>Welcome to Ping instant messanger! experience instant messaging at it's best.</p>
            <p> Join a chat to start Pinging!. </p>
            </div>
            <style jsx>{`
                .welcome {
                    margin-top: 10%;
                }
                p {
                    text-align: center;
                    color:#424242;
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

export default WelcomeWindow