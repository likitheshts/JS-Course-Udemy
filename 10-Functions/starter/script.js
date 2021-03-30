'use strict';

const flight = 'L12R';
const jonas = {
  name: 'Jonas schedmremme',
  passport: 'IND12340',
  age: 20,
};

const checkin = function (flightnum, passenger) {
  flightnum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 'IND12340') {
    alert('Check iN');
  } else {
    alert('Wrong Password');
  }
};

checkin(flight, jonas);
console.log(flight);
console.log(jonas);

const lufthansa = {
  airline: 'lufthansa',
  itacode: 'LH',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itacode}${flightnum}`
    );
    this.bookings.push({ flight: `${this.itacode} ${flightnum}`, name });
  },
};

lufthansa.book(239, 'jonas');
lufthansa.book(231, 'smith');

console.log(lufthansa.bookings);

function x() {
  var x = 7;
  function y() {
    console.log(x);
  }
  return y;
}

var z = x();
z();
