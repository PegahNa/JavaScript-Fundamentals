const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

lowercaseMessage("HI THERE");

const transform = (message, transformFunction) => {
  return transformFunction(message);
};

transform("HI THERE", lowercaseMessage);

module.exports = lowercaseMessage;
