function canCreateString(str1, str2) {
    let map = new Map();
    for (let i = 0; i < str1.length; i++) {
        let count = map.get(str1[i]) || 0;
        map.set(str1[i], count + 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let count = map.get(str2[i]) || 0;
        if (count === 0) {
            return false;
        }
        map.set(str2[i], count - 1);
    }

    return true;
}

var declaredString = prompt("Nhập vào chuỗi đã được khai báo:");
var inputString = prompt("Nhập vào chuỗi bất kỳ:");
console.log(canCreateString(declaredString, inputString));