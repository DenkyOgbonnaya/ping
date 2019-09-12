import React, {useState, useContext} from 'react';
import io from 'socket.io-client';
import SideNav from '../includes/sideNav';
import Main from './main';
const Chatup = () => {

    return (
        <div className='wrapper' > 
            
            <div className='side-nav'> <SideNav /> </div>
            <div className='main' > <Main /> </div>
                
            <style jsx >{`
                .wrapper {
                    display: grid;
                    grid-template-columns: 30% 70%;
                }
                .side-nav {
                    grid-column: 1/1;
                }
                .main {
                    grid-column: 2/2
                }
            `}</style>
        </div>
    )
}

export default Chatup