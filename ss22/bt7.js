let g = prompt("Nhập vào giá trị g:");
let h = prompt("Nhập vào giá trị h:");
let j = prompt("Nhập vào giá trị j:");

g = Number(g);
h = Number(h);
j = Number(j);

let delta = h*h - 4*g*j;

if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else if (delta == 0) {
    let y = -h / (2*g);
    console.log("Phương trình có nghiệm kép y1 = y2 = " + y);
} else {
    let y1 = (-h - Math.sqrt(delta)) / (2*g);
    let y2 = (-h + Math.sqrt(delta)) / (2*g);
    console.log("Phương trình có hai nghiệm phân biệt y1 = " + y1 + ", y2 = " + y2);
}