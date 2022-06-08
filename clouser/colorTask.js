let paragh = document.getElementsByTagName("p");

let arrColors = [ "yellow", "black", "cyan"];


function getColor() {
  let number = 0;
  return function () {
	  if (number == arrColors.length) {
		  k = 0;
		}
		this.style.color = arrColors[number];
		number++;
  };
}

paragh = Array.from(paragh);
console.log(paragh)

 paragh.forEach((el) => {
  return el.addEventListener("click", getColor());
});
