var arr = ["Hello", "World", "OpenAI", "JavaScript", "Chuỗi", "Mảng"];

function timPhanTuChuaChuoi(string, str) {
    var result = string.filter(function(item) {
        return item.includes(str);
    });
    return result;
}

var inputString = prompt("Nhập vào chuỗi bất kỳ:");

let sreachresult = timPhanTuChuaChuoi(arr, inputString);
if (sreachresult.length > 0) {
    console.log("Các phần tử trong mảng chứa chuỗi '" + inputString + "':");
    sreachresult.forEach(function(item) {
        console.log(item);
    });
} else {
    console.log("Không có phần tử nào trong mảng chứa chuỗi '" + inputString + "'.");
}
