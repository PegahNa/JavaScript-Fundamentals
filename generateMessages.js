const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

function generateMessages(data) {
  return data.map(
    (item) =>
      `Hi ${item.name}! ${item.discount}% off our best candies for you today!`
  );
}

const messages = generateMessages(namesAndDiscounts);
console.log(messages);

module.exports = generateMessages;
