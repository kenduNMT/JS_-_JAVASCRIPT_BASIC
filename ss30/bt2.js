var n = prompt("Nhập vào số nguyên dương n:");

if (n % 2 === 0) {
    for (let i = 1; i < n; i += 2) {
        console.log(i);
    }
    console.log(n - 1);
} else {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}
