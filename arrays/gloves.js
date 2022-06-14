https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript


function numberOfPairs(gloves)
{
	let res = 0;
	const objOfGloves = {}
	for(let char of gloves){
		char in objOfGloves? objOfGloves[char]+=1:objOfGloves[char] = 1; 
	}
	Object.values(objOfGloves).forEach(el=>{
		let count = Math.floor(el/2)
		if(count=>1){
			res+=count
		}
	})
	
	return res
	
}
let arr = ['red','green','blue','blue']//1
console.log(numberOfPairs(arr))