const uuid = require('uuidv4').default;
const constructMessage = ( sender, message) => ({
    _id: uuid(),
    sender,
    text: message,
    time: new Date()
  });

module.exports = {
    constructMessage
}