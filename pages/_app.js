import React from 'react';
import App from 'next/app';
import AuthContextProvider from '../context/authContext';
import ChatContextProvider from '../context/chatContext';
import ConnectionContextProvider from '../context/connectionContext';

class ChatApp extends App {
    render() {
        const { Component, pageProps } = this.props;
    
        return (
            <AuthContextProvider>
                <ConnectionContextProvider>
                    <ChatContextProvider>
                        <Component {...pageProps} />
                    </ChatContextProvider>
                </ConnectionContextProvider>
            </AuthContextProvider >
        )
    }
}

export default ChatApp;