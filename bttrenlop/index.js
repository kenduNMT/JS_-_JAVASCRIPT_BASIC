function fibonacci(n) {
    let a = 0, b = 1;
    if (n <= 0) {
        return "Vui lòng nhập một số nguyên dương.";
    } else if (n == 1) {
        return b;
    } else if (n == 2) {
        return b;
    } else {
        let c;
        for(let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

var n = prompt("Nhập vào số nguyên dương n:");
console.log("Số Fibonacci thứ " + n + " là: " + fibonacci(n));

function reverseNumber(n) {
    if (n <= 0) {
        return "Vui lòng nhập một số nguyên dương.";
    }
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reversed;
}

var n = prompt("Nhập vào một số nguyên dương:");
console.log("Số đảo ngược của " + n + " là: " + reverseNumber(n));
