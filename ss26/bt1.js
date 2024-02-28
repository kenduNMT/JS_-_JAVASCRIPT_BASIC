var arr = [1, 2, 'a', 'b', 3.5, 4, 'c', 5.6, 7]; // Mảng gồm các phần tử bất kỳ
console.log('Mảng đã cho: ',arr)
var intArr = arr.filter(Number.isInteger);

if (intArr.length > 0) {
    console.log("Các phần tử là số nguyên trong mảng: ", intArr);
} else {
    console.log("Trong mảng không tồn tại số nguyên");
}