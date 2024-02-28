var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]; // Mảng số nguyên
console.log('Mảng đã cho: ', arr)

var counts = {};
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
}

var duplicates = [];
for (var num in counts) {
    if (counts[num] > 1) {
        duplicates.push(num);
    }
}

console.log(duplicates);