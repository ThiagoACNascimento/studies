const carMakers = ['toyota', 'ford', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // ERROR

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates: (Date | string)[] = [new Date(), '2026-04-23'];
importantDates.push('2023-10-10');
importantDates.push(new Date());
importantDates.push(100); // ERROR
