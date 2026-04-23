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

const printSummury = (item: Reportable) => {
  console.log(item.summury());
};

printSummury(oldCivic);
