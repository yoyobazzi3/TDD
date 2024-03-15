//passing in the parameter N then goes into the function
const fizzBuzz = require("/Users/youssefbazzi/WebstormProjects/TDD/fizzBuzz.js");
describe('fizzBuzz tests', () => {
    test("When given an number N, it the number N", () => {
        // function will go in here.
        let N = 2
        // arrange the setup for the test
        let expected = 2;

        //act call the methods
        let actual = fizzBuzz(N);

        // assert what you want to happen
        expect(actual).toEqual(expected);
    });

    test("If the number in the array is divisible by 3 print Fizz", () => {
        // arrange
        let N = 3;
        let expected = "Fizz";
        //act
        let actual = fizzBuzz(N);
        //assert
        expect(actual).toEqual(expected);
    });

    test("If the number is divisible by 5 print Buzz", () => {
        // arrange
        let N = 5;
        let expected = "Buzz"
        //act
        let actual = fizzBuzz(N);
        //assert
        expect(actual).toEqual(expected);
    });
    test("If the number in the array is divisible by 3 and 5, print 'FizzBuzz'", () => {
// ARRANGE
        let N = 30;
        let expected = "FizzBuzz"
// ACT
        let actual = fizzBuzz(N);
// ASSERT
        expect(actual).toEqual(expected);
    });
});
module.exports = fizzBuzz