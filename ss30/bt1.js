function isSymmetric(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        if (array[start] !== array[end]) {
            if (isNaN(array[start]) || isNaN(array[end]) || typeof array[start] !== typeof array[end]) {
                return false;
            }
        }
        start++;
        end--;
    }
    return true;
}

var inputArr = prompt("Nhập mảng, cách nhau bằng dấu phẩy, chữ viết liền vd:1,cc,1 :");

var arr = inputArr.split(",").map(Number);

console.log(isSymmetric(arr) ? "Mảng đối xứng" : "Mảng không đối xứng");