export const formatTime = time => {
    const newTime = new Date(time);
    let theTime = newTime.toLocaleDateString('en-US', {
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true
    })
    return theTime.slice(10);
}