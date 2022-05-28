// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript
function encode(str,  n)
{	numberArr = n.toString().split('').map(el=>+el);
	let engAlphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	strArr = str.toLowerCase().split('');
	let newArr = [];
	for(let char=0;char<strArr.length;char++){
		for(let element=0;element<engAlphabet.length;element++){
			if(engAlphabet[element].includes(strArr[char])){
				newArr.push(element+1)
			}

		}

	}

	if(newArr.length>numberArr.length){
		for(let i = 0;i<newArr.length-1;i++){
			numberArr.push(numberArr[i])

		}
	}
	console.log(numberArr.length)
	console.log(newArr.length)
	let res = newArr.map((el,index) =>{
		
		return el+numberArr[index]
	})
  return res
}
console.log(encode('scout',1939))

