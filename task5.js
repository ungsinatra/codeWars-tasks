// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
  let strToArr = numbers.join("");
  let cityCode = `(${strToArr.slice(0, 3)})`;
  let subscriberСode = `${strToArr.slice(3,6)}`;
  let number = `${cityCode} ${subscriberСode}-${strToArr.slice(6)}`
  return number
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// "(123) 456-7890"])
