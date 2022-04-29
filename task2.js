//! https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
	  if(b.length>1){
		  if(a[i]!=b[i]){
			  newArr.push(a[i])
		  }
	  }else {
		if(a[i]!=b){
			newArr.push(a[i]);
		}
		
	  }
  }

  return newArr;
}
console.log(arrayDiff([1,2,3], [1,2]));
