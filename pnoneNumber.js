function checkLength(phoneNumber) {
  return phoneNumber.length <= 10;
}

function filterLongNumbers(phoneNumbers) {
  return phoneNumbers.filter(checkLength);
}

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(["4763687363", "7867867862"]));
console.log(filterLongNumbers([]));
