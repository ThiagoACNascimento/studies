class Vihicle {
  constructor(public color: string = 'red') {}

  // private drive(): void {
  //   console.log('vruuuuum');
  // }

  protected honk(): void {
    console.log('beee');
  }
}

// `drive` can be only used inside the Vehicle Class
class Car extends Vihicle {
  constructor(
    public wheels: number,
    color?: string,
  ) {
    super(color);
  }

  private drive(): void {
    console.log('vrum vrum....');
  }

  startDrive(): void {
    this.drive();
    this.honk();
  }
}

const vihicle = new Vihicle('blue');
console.log(vihicle.color);
// cannot use `drive` outside the Vihicle Class
// vihicle.drive();
// cannot use `honk` outside the Vihicle Class
// vihicle.honk();

const car = new Car(4, 'black');
car.startDrive();
