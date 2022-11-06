interface theData {
  name: string;
  acceleration: number;
  honk(): void;
  accelerate(speed: number): void;
}

class Car implements theData {
  name: string;
  acceleration: number;
  constructor(name) {
    this.name = name;
    this.acceleration = 0;
  }
  honk() {
    console.log(` ${this.name} is saying: Toooooooooot!`);
  }
  accelerate(speed) {
    this.acceleration = this.acceleration + speed;
  }
}

var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
