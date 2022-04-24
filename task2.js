//! https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript


function arrayDiff(a, b) {
	const arrOfB =b;
	const newArr =[]
	a.filter(el =>{
		if(el!==arrOfB[0]&&el!==arrOfB[1]){
			newArr.push(el);
		}else{
			return []
		}
	})
	return newArr
}
console.log(arrayDiff([1,2,3], [1,2]))