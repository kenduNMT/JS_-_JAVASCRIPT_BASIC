let c = prompt("Nhập vào độ dài cạnh a:");
let d = prompt("Nhập vào độ dài cạnh b:");
let e = prompt("Nhập vào độ dài cạnh c:");

c = Number(c);
d = Number(d);
e = Number(e);

if (c + d > e && c + e > d && d + e > c) {
    console.log("Độ dài 3 cạnh hợp lệ, có thể tạo thành một tam giác");
} else {
    console.log("Độ dài 3 cạnh không hợp lệ, không thể tạo thành một tam giác");
}