
var config = require ('./config');

const client = require('twilio')(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);
 

var send = (message, callback) => {
    
    client.messages.create({
        from: config.TWILIO_PHONE_NUMBER,
        to: config.CELL_PHONE_NUMBER,
        body: message
            }).then((messsage) => console.log(message.sid)),
        (err, message) => {
            console.log(message.sid);
    };
};

module.exports = {
    send
}