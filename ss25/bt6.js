var n = parseInt(prompt("Nhập vào số nguyên dương n: "));
let fib = [0, 1];

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Số Fibonacci thứ " + n + " là: " + fibonacci(n));