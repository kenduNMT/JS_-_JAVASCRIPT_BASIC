let number = prompt("Nhập vào một số có 4 chữ số:");

number = Number(number);

let hangNghin = Math.floor(number / 1000);
let hangTram = Math.floor((number % 1000) / 100);
let hangChuc = Math.floor((number % 100) / 10);
let hangDonVi = number % 10;

console.log("Hàng nghìn: " + hangNghin);
console.log("Hàng trăm: " + hangTram);
console.log("Hàng chục: " + hangChuc);
console.log("Hàng đơn vị: " + hangDonVi);