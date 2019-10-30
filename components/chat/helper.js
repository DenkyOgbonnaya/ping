export const formatTime = time => {
    const newTime = new Date(time);
    let theTime = newTime.toLocaleDateString('en-US', {
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true
    })
    
    return theTime.slice(12);
}
export const getLastMessage = chat => {
    const lastMessageIndex = chat.messages.length-1;
    return chat.messages[lastMessageIndex];
}
export const truncate = (string, isMobile)  => {
    if(string && string.length <= 10)
        return string;
    if(isMobile && string && string.length > 10)
    return `${string.slice(0, 10)}...`;

    return string;
}