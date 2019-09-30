export const formatTime = time => {
    const newTime = new Date(time);
    let theTime = newTime.toLocaleDateString('en-US', {
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true
    })
    return theTime.slice(10);
}
export const getLastMessage = chat => {
    const lastMessageIndex = chat.messages.length-1;
    return chat.messages[lastMessageIndex];
}