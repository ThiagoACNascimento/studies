interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

printVehicle(oldCivic);
