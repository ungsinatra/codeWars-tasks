// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
var countBits = function (n) {
  let binary = n.toString(2);
  let arrOfBinary= binary.split('');

  let valueOfOne=0;
  for(let i of arrOfBinary){
	if(i.includes(1)){
		valueOfOne+=1
	}
  }
  return valueOfOne
}

countBits(9);
