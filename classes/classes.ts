class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log("The vehicle is moving...");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }


  drive(): void {
    console.log("The car is moving...");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
console.log(car.color);
