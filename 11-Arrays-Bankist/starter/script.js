'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, -200, 340, -300, -20, 50, 400, -460];

const displaymovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
   <div class="movements__row">
      <div class="movements__type movements__type--${type}">
            ${i + 1} ${type} </div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displaymovements(account1.movements);

const createusername = function (acc) {
  acc.forEach(user => {
    acc.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
    console.log(acc.username.toUpperCase());
  });
};

const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);

const withdrawals=movements.filter(mov => mov<0)
console.log(withdrawals);









/*
let Julia = [3, 5, 2, 12, 7];
let Kate = [4, 1, 15, 8, 3];
const checkdogs = function (arr1, arr2) {
  let JuliaCopy = arr1.slice(1, 3);
  let combine = JuliaCopy.concat(arr2);
  combine.forEach(function (value, i) {
    if (value > 3) {
      console.log(`Dog Number ${i + 1} is an Adult,and is ${value} Years old`);
    } else {
      console.log(`Dog Number ${i + 1} is an Puppy,and is ${value} Years old`);
    }
  });
};
checkdogs(Julia, Kate);
*/
