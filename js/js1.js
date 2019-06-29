/* TASK 111111111111111111111111111111111111111111111111111111111

let arr = [1, 5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

let newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    newArray.push(arr[i]);
  }
}

alert (newArray);

*/

/*
TASK 22222222222222222222222222222222222222222222222222222222222222222
const arr1 = [1, 2, 3];

let arr2 = [...arr1, ...arr1];

alert(arr2);

*/

/* TASK 3333333333333333333333333333333333333333333333333333333333333333

const arr1 = [1, 2, 3];

let arr2 = [...arr1, ...arr1.reverse()];

alert (arr2);

*/

/* TASK 4444444444444444444444444444444444444444444444444444444444444444

const arr = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

var summ = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number' && arr[i] > 0) {
     summ += arr[i];
  }
}

alert (summ);

*/

/*  TASK 5555555555555555555555555555555555555555555555555555555555555555

const arr = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

var arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number' && arr[i] > 0) {
     arr2.push(arr[i]);
  }
}

alert (arr2);

*/

/* TASK 666666666666666666666666666666666666666666666666666666666666666

const arr = [1, 2, 3, [4], 5, [6, [7, 8], 9]];

let flatArr = arr.flat(Infinity);

alert (flatArr);

*/












function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}