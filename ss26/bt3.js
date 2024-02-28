var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
console.log('Mảng đã cho: ',arr) // Mảng số nguyên
var value = prompt("Nhập vào một số nguyên:");

var count = arr.filter(item => item == value).length;

console.log("Số " + value + " xuất hiện " + count + " lần trong mảng.");