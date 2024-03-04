function countTriangles(arr) {
    var n = arr.length;
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < n-2; ++i) {
        let k = i + 2;
        for (let j = i+1; j < n; ++j) {
            while (k < n && arr[i] + arr[j] > arr[k]) {
                console.log("Tam giác có thể tạo ra từ các cạnh: ", arr[i], arr[j], arr[k]);
                ++k;
            }
            if (k > j) {
                count += k - j - 1;
            }
        }
    }
    return count;
}

var arr = prompt("Nhập vào mảng số nguyên dương, cách nhau bởi dấu phẩy: ").split(',').map(Number);

console.log("Số lượng tam giác có thể tạo ra từ mảng đã cho là:", countTriangles(arr));