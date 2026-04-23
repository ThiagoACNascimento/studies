let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objs
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
// Annotations
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// Function
const logNumber: (index: number) => void = (index: number) => {
  console.log(index);
};

// When to use annotation
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) Whe we declare a variable on one line
// and initalizate it later
let word = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let index = 0; index < word.length; index++) {
  if (word[index] === 'green') {
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbersArray.length; index++) {
  if (numbersArray[index] > 0) {
    numberAboveZero = numbersArray[index];
  }
}
