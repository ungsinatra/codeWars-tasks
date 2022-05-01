// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
	let engAlphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let str = text.split(' ').join('');
	let idOfText=[];
	str = str.toLowerCase().split('')
	for(let i =0;i<str.length;i++){
		for(let k=0;k<engAlphabet.length;k++){
			if(engAlphabet[k].includes(str[i])){
				idOfText.push(k+1)
			}else{
				continue
			}
		}
	}

	idOfText= idOfText.join(' ')
	return idOfText
}
console.log(alphabetPosition('The narwhal bacons at midnight.'))



