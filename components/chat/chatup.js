import React, {useState, useContext} from 'react';
import io from 'socket.io-client';
import SideNav from '../includes/sideNav';
import Main from './main';
import { ChatContext } from '../../context/chatContext';

const Chatup = () => {
    const{chatData} = useContext(ChatContext);

    const{isVisibleSidebar} = chatData;

    return (
        <div className='wrapper' > 
            
            <div className= {isVisibleSidebar ? 'sidebar-visible' : 'sidebar-hidden'} id='sidebar'>  <SideNav /> </div>
            <div className='main' > <Main /> </div>
                
            <style jsx >{`
                .wrapper {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    overflow: hidden;
                    background: #fafafa;
                }
                .sidebar-hidden {
                    flex: 0;
                    flex-basis:0;
                    width: 0px;
                    transition: 0.5s;
                }
                .sidebar-visible {
                    flex-basis: 100%;
                    margin-right: 0px;
                    border: 1px solid black;
                    background-color: #15191b;
                    color: #ccc;
                    z-index: 2;
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    transition: 0.5s;
                }
                .main{
                    flex: 2;
                    background: #ffffff;
                    width: 100%;
                    padding: 5px;
                    height: 100vh;
                    color: #ccc;
                    overflow: auto;
                  
                }
                @media (min-width: 768px) {
                    #sidebar {
                        flex-basis: 257px;
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                        overflow-y: hidden;
                        
                    }
                  }
            `}</style>
        </div>
    )
}

export default Chatup