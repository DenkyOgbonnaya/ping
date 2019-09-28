const uuid = require('uuidv4').default;

const chatrooms = [
    {
        _id: uuid(),
        name: 'General',
        members: [],
        messages: [{_id: '949kkfj', sender: 'log', text: 'Welcome to General'}],
        description: 'This group is for all and sundary. you can talk about anything here'
    },
    {
        _id: uuid(),
        name: 'Web Developers',
        members: [],
        messages: [{_id: '949kkfj', sender: 'log', text: 'Welcome to Web Developers'}],
        description: 'This group is for web developers and discussion is strickly web development'
    },
    {
        _id: uuid(),
        name: 'Artificial Inteligence',
        members: [],
        messages: [{_id: '949kkfj', sender: 'log', text: 'Welcome to Artificial Inteligence '}],
        typingMessage: '',
        description: 'For all lovers of AI'
    }
]


module.exports = chatrooms;