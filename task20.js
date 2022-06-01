function squareDigits(num){
	const arrNum = num.toString().split('').map(el=>+el);
	let counter = ''
	arrNum.map(el=>counter+=el**2);
	return Number(counter)
}


console.log(squareDigits(3212))

