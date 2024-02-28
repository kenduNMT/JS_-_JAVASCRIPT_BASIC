var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9]; // Mảng số nguyên
console.log('Mảng đã cho: ',arr)
var negative = arr.filter(item => item < 0);
var positive = arr.filter(item => item >= 0);

var result = negative.concat(positive);

console.log(result);