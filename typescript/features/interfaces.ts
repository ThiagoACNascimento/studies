interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
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

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.summury());
};

printVehicle(oldCivic);
