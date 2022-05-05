// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript
function isOddHeavy(n) {
  console.log(n)
  let res;
  let isOdd = [];
  let newArr  = []
  let arr= n.filter((el) => {
    if (el % 2 == 0||el===0) {
      newArr.push(el);
    } else {
      isOdd.push(el);
    }
  });
  console.log(newArr)
  console.log(isOdd)
  if (newArr.length != 0 && isOdd.length!=0) {
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < isOdd.length; j++) {
        if (newArr[i] > isOdd[j]) {
          return (res = false);
        } else if(isOdd[j]>newArr[i]){
          res = true;
        }
      }
    }
    
  }else if (newArr.length===0&&isOdd.length>0){
    res = true
  }else{
    res = false
  }


  return res;
}
console.log(isOddHeavy([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -2, -1 ]));
