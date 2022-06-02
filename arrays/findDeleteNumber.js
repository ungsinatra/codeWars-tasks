/*https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
Дана упорядоченная последовательность чисел от 1 до N. Возможно, из него удалили один номер, тогда остальные номера были перемешаны. Найдите номер, который был удален.

Пример:

Начальная последовательность массива[1,2,3,4,5,6,7,8,9]
Смешанный массив с одним удаленным числом[3,2,4,6,7,8,1,9]
Ваша функция должна возвращать int 5.
Если из начального массива не было удалено ни одного числа, ваша функция должна вернуть значение int 0.

Примечание : N может быть 1 или меньше (в последнем случае первый массив будет []).*/

function findDeletedNumber(arr, mixArr) {
	let delNum = arr.filter(el=>(!mixArr.includes(el))?el:0)
	if(delNum[0]===undefined){
		delNum[0] = 0;
	}
	return delNum[0]
  }



console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]))