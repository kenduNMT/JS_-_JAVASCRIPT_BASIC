var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 15;

function findTriplets(array, sum) {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];

            if (currentSum === sum) {
                return [array[i], array[left], array[right]];
            } else if (currentSum < sum) {
                left++;
            } else {
                right--;
            }
        }
    }

    return "Không tìm thấy mảng con thỏa mãn điều kiện";
}

console.log(findTriplets(arr, target));