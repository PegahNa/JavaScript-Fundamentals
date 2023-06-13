const fizzBuzzUntil = () => {
  let i = 0;
  while (!(i >= 10)) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
    i++;
  }
};

module.exports = fizzBuzzUntil;
fizzBuzzUntil(10);
