function maxSubArraySum(array) {
    let maxSoFar = array[0];
    let maxEndingHere = array[0];
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 1; i < array.length; i++) {
        if (maxEndingHere + array[i] > array[i]) {
            maxEndingHere += array[i];
        } else {
            maxEndingHere = array[i];
            s = i;
        }
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
    }
    return array.slice(start, end + 1);
}

var declaredArray = [1, -3, 2, 1, -1, 3, -2, 3, -1, 2, -4, 5];
console.log(maxSubArraySum(declaredArray));