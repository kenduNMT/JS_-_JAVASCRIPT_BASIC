var str = prompt("Nhập vào một chuỗi:");

function sortString(s) {
    let letters = [];
    let numbers = [];
    let specials = [];

    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
            letters.push(s[i]);
        } else if (s[i] >= '0' && s[i] <= '9') {
            numbers.push(s[i]);
        } else {
            specials.push(s[i]);
        }
    }

    return [...letters, ...numbers, ...specials];
}

console.log(sortString(str));