var num = parseInt(prompt("Nhập vào một số nguyên dương:"));

for(let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
        console.log(`Bình phương của ${i} là ${i * i}`);
    }
}