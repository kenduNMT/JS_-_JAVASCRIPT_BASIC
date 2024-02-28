let arr1 = [1,2,3,4,5]; // Thay đổi mảng này theo nhu cầu của người nhập
let arr2 = [-3,-1,0,1,5];
let arr3 = [1,5,6,7];
console.log('Các mảng đã cho của bài 10: ',arr1,arr2,arr3)

let commonElements = arr1.filter(element => arr2.includes(element) && arr3.includes(element))

console.log('Các phần tử chung của các mảng đã cho: ',commonElements)