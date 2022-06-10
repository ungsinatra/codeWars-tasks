https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
function mygcd(x,y){
	if(y==0){
	  return x
	}
	return mygcd(y,x%y)
}

  console.log(mygcd(8,9))



