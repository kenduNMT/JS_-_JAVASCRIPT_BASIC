var n = parseInt(prompt("Nhập vào một số nguyên dương:"));
let S = 0;

for(let i = 1; i <= n; i++) {
    S += 1 / Math.pow(i, 3);
}

S = S.toFixed(5); // Làm tròn đến 5 chữ số thập phân

console.log(`Kết quả của biểu thức S= 1+1/2^3+1/3^3+...+1/${n}^3 là: ${S}`);