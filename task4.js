// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
	let elZero =[]
	let strInArr = []
	let boolOfArr = [];
	let nuberOfarr = []
	let newArr = arr.filter((el)=>{
		if(typeof el=='boolean'){
			boolOfArr.push(el)
		}
		if(el==0){
			elZero.push(el)
		}
		if(typeof el =='string'){
			strInArr.push(el);
		}
		if(el>0){
			nuberOfarr.push(el)
		}

	})
	boolOfArr.map(el=>{
		return newArr.push(el)

	})
	nuberOfarr.map(el=>{

		return newArr.push(el)
	})
	strInArr.map((el)=>{
		return newArr.push(el)

	})
	elZero.map((el)=>{
		return newArr.push(el)

	})
	
	return newArr
}


console.log(moveZeros([false,'a','asd','ssss',1,2,0,1,0,,0,0,1]))