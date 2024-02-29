var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mảng đã cho của bài 6: ', arr)

arr.sort(() => Math.random() - 0.5);

console.log('Mảng sau khi sắp xếp theo thứ tự ngẫu nhiên:', arr);