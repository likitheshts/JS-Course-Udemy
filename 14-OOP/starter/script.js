'use strict';

const person = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
};
const jonas = new person('liki', 'ts');
console.log(jonas);

person.prototype.calacage = function () {
  console.log(2037 + this.firstname);
};
console.log(person.prototype);
jonas.calacage();
console.log(jonas.__proto__);

class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    console.log(this.speed + 10);
  }
  break() {
    console.log(this.speed - 5);
  }
  get speedus() {
    return this.speed / 1.6;
  }
  set speedus(speed) {
    this.speed = speed * 1.6;
  }
}
const car1 = new car('bmw', 20);
car1.accelarate();
car1.break();
car1.speed = 50;
console.log(car1);

const ev = function (make, speed, charge) {
 
  this.charge = charge;
};
ev.prototype = Object.create(car.prototype);
const mike = new ev(20);
