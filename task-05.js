"use strict";

class Car {
  static getSpecs(car) {
    console.table(car);
  }
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.isOn = false;
    return (this.speed = 0);
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed -= value);
    }
  }

  drive(hours) {
    if (this.turnOn) {
      return (this.distance = hours * this.speed + this.distance);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// console.table(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// console.table(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
