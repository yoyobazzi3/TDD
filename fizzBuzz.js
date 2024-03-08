//fizzBuzz.js

const fizzBuzz = (N) => {
    let array = []

    for (i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz");
        } else if (i % 3 === 0) {
            array.push("Fizz");
        } else if (i % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}
module.exports = fizzBuzz