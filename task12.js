// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString(strng) {
  let newArr = strng.split("");
  let valuesOfZero = [];
  let strOfString = "";
  let numberOfString = "";
  let result = "";
  let arr = newArr.map((el) => {
    if (!Number(el) && el !== "0") {
		return (strOfString += el);
    } else if (el === "0") {
		valuesOfZero.push(el);
      return (numberOfString += el);
    } else {
      return (numberOfString += el);
    }
  });
  numberOfString = +numberOfString;
  if (numberOfString <= 8&&valuesOfZero.length !== 0) {
    result = `${strOfString}00${numberOfString + 1}`;
  } else if (numberOfString >= 9 && numberOfString < 98&&valuesOfZero.length !== 0) {
    result = `${strOfString}0${numberOfString + 1}`;
  } else if (numberOfString >= 99 && numberOfString < 1000&&valuesOfZero.length == 0) {
    result = `${strOfString}${numberOfString + 1}`;
  } else if (valuesOfZero.length === 0) {
    result = `${strOfString}${numberOfString + 1}`;
  } else {
    result = `${strOfString}${numberOfString + 1}`;
  }
  return result;
}
console.log(incrementString("foobar100"));
