function findPair(array, sum) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(sum - array[i])) {
            return [sum - array[i], array[i]];
        }
        map.set(array[i], i);
    }
    return null;
}

var declaredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let inputNumber = parseInt(prompt("Nhập vào một số nguyên:"));
console.log(findPair(declaredArray, inputNumber));