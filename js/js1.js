/* TASK 111111111111111111111111111111111111111111111111111111111

let arr = [1, 5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

let newArray = arr.filter(function(number) {
  return typeof number == "number";
});

alert (newArray);

*/

/* TASK 4444444444444444444444444444444444444444444444444444444444444444

const arr = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

var sum = arr.reduce(function(sum, current) {
  if (typeof current == 'number' && current > 0) {
     return sum + current;
  }
  return sum;
}, 0);

alert (sum);

*/

/*  TASK 5555555555555555555555555555555555555555555555555555555555555555

const arr = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

var arr2 = arr.filter(function(number) {
  return typeof number == "number" && number > 0;
});

alert (arr2);

*/