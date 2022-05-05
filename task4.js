// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
var moveZeros = function (arr) {
  let zeroOfArr = arr.filter((elm) => elm === 0).length;
  let res = arr.filter((elm) => elm !== 0);

  for (let i = 0; i < zeroOfArr; i += 1) {
    res.push(0);
  }

  return res;
};

console.log(moveZeros());
