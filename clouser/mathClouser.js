// https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

function calculate(...a) {
	return function (...b) {
		let arr = [...a, ...b]
	  return arr.reduce((sum, n) => sum + n)
	};
  }

  const rs = calculate(1,2);
console.log(rs(1,2))