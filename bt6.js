function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

var declaredString = "đây là một chuỗi bất kỳ";
console.log('Mang cua bai 6: ',declaredString)
console.log(capitalizeFirstLetters(declaredString));