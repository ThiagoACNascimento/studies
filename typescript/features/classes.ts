class Vihicle {
  drive(): void {
    console.log('vruuuuum');
  }

  honk(): void {
    console.log('beee');
  }
}

class Car extends Vihicle {}

const vihicle = new Vihicle();
vihicle.drive();
vihicle.honk();

const car = new Car();
car.drive();
car.honk();
