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
    return 	valuesOfZero.push(el);
     
    } else {
      return (numberOfString += el);
    }
  });
  let corentValuesL = numberOfString.length;
  valuesOfZero = valuesOfZero.join('');
  numberOfString = `${((+numberOfString)+1)}`;
  if(corentValuesL>=numberOfString.length){
    result = `${strOfString}${valuesOfZero}${numberOfString}`
  }else{
    result = `${strOfString}${(valuesOfZero.slice(1))}${numberOfString}`
  }
  return result;
}

console.log(incrementString('foo99'))
