interface Reportable {
  summury(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summury(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summury(): string {
    return `My Drink has ${this.sugar} grams of sugar`;
  },
};

const printSummury = (item: Reportable) => {
  console.log(item.summury());
};

printSummury(oldCivic);
printSummury(drink);
