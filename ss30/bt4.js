var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        console.log('Các số nguyên tố đã khai báo: ',arr[i]);
    }
}