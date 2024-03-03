var chuoikitu = prompt("Nhập một chuỗi kí tự bất kì: ");
var kitu = prompt("Nhập 1 kí tự: ");

function kiTuKhongTrungLap(chuoikitu, kitu) {
    var n = 0;
    for (var i = 0; i < chuoikitu.length; i++) {
        if (chuoikitu[i] === kitu) {
            n++;
        }
    }
    return n;
}
console.log("Số lần xuất hiện của ký tự trong chuỗi là: " + kiTuKhongTrungLap(chuoikitu, kitu));
