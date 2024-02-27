var n = parseInt(prompt("Nhập vào số nguyên n: "));
let count = 0;
var nStr = n.toString();

for (let i = 0; i < nStr.length; i++) {
    if (parseInt(nStr[i]) % 2 === 0) {
        count++;
    }
}

console.log("Số nguyên " + n + " có " + count + " chữ số chẵn.");