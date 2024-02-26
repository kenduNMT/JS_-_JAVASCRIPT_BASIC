var num = parseInt(prompt("Nhập vào một số nguyên dương:"));
var sum = 0;

for(let i = 2; i <= num; i += 2) {
    let square = i * i;
    if(sum + square > num) {
        break;
    }
    console.log(`Bình phương của ${i} là ${square}`);
    sum += square;
}
