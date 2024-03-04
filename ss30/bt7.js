function minSubArrayLen(arr, num) {
    let total = 0;
    let start = 0;
    let minLen = Infinity;

    for (let end = 0; end < arr.length; end++) {
        total += arr[end];
        while (total >= num) {
            minLen = Math.min(minLen, end - start + 1);
            total -= arr[start];
            start++;
        }
    }

    return minLen === Infinity ? [] : arr.slice(start - 1, start - 1 + minLen);
}

var inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inputNum = 15;

console.log(minSubArrayLen(inputArr, inputNum));