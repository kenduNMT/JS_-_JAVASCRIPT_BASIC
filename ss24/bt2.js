var a = parseInt(prompt("Nhập vào số nguyên thứ nhất:"));
var b = parseInt(prompt("Nhập vào số nguyên thứ hai:"));
var sum = 0;

if(a > b) {
    [a, b] = [b, a]; // Hoán đổi a và b nếu a > b
}

for(let i = a + 1; i < b; i++) {
    sum += i;
}

console.log(`Tổng các số nguyên trong khoảng từ ${a} đến ${b} là: ${sum}`);