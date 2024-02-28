var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Mảng có sẵn
console.log('Mảng đã có:', arr)
var value = prompt("Nhập vào giá trị cần tìm:");

var index = arr.indexOf(Number(value));

if (index !== -1) {
    console.log("Phần tử " + value + " tồn tại ở vị trí " + index + " trong mảng.");
} else {
    console.log("Phần tử không tồn tại trong mảng.");
}