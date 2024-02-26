var num = parseInt(prompt("Nhập vào một số:"));

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(num)) {
    console.log(`${num} là số nguyên tố.`);
} else {
    console.log(`${num} không phải là số nguyên tố.`);
}