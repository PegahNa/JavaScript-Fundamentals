const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const formattedData = namesAndDiscounts.map(
  (item) => `${item.name} - ${item.discount}%`
);
console.log(formattedData);

module.exports = namesAndDiscounts;
