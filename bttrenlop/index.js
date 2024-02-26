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

let n = prompt("Nhập vào số nguyên dương n:");
console.log("Số Fibonacci thứ " + n + " là: " + fibonacci(n));
