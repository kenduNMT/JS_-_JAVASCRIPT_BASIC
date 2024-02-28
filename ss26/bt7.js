var arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7]; // Mảng số nguyên
console.log('Mảng đã cho: ', arr);
var target = Number(prompt("Nhập vào một số:"));

for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) {
            console.log(arr.slice(i, j + 1));
            break;
        }
    }
    if (sum === target) break;
}

if (sum !== target) {
    console.log("Không có mảng con thỏa mãn");
}