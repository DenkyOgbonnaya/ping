import React from 'react';
import App from 'next/app';
import AuthContextProvider from '../context/authContext';
import ChatContextProvider from '../context/chatContext';

class ChatApp extends App {
    render() {
        const { Component, pageProps } = this.props;
    
        return (
            <AuthContextProvider>
                <ChatContextProvider>
                    <Component {...pageProps} />
                </ChatContextProvider>
            </AuthContextProvider >
        )
    }
}

export default ChatApp;