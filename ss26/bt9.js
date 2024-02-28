var arr = [1,2,5,7]; // Thay đổi mảng này theo nhu cầu của người nhập
console.log('Mảng đã cho của bài 9: ',arr)
var i = 1;
while (arr.includes(i)) {
    i++;
}
console.log("Số nguyên dương nhỏ nhất chưa xuất hiện trong mảng là: ",i);