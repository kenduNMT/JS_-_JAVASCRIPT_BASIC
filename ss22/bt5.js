let n = prompt("Nhập vào giá trị n:");
let m = prompt("Nhập vào giá trị m:");

if (n == 0) {
    if (m == 0) {
        console.log("Phương trình có vô số nghiệm");
    } else {
        console.log("Phương trình vô nghiệm");
    }
} else {
    let x = -m / n;
    console.log("Nghiệm của phương trình là: " + x);
}