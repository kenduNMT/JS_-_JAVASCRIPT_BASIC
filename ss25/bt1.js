var n = parseInt(prompt("Nhập vào một số nguyên dương: "));
var sum = 0;
var i = 1;

while (i <= n) {
    sum += i;
    if (sum % 2 !== 0) {
        console.log("Tổng các số từ 1 đến " + i + " là: " + sum);
        continue;
    }
    i++;
}