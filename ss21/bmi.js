const height = Number(prompt('Hãy nhập chiều cao của bạn: '))
const weight = Number(prompt('Hãy nhập cân nặng của bạn: '))
const Bmi = weight / (height^2)
alert('Chỉ số Bmi của bạn là: '+ Bmi.toFixed(2))
if (Bmi < 18.5) {
    alert('Bạn thuộc dạng cân nặng thấp(gầy)')
} else if (Bmi >= 18.5 && Bmi < 24.9) {
    alert('Bạn thuộc dạng bình thường')
} else if (Bmi == 25) {
    alert('Bạn thuộc dạng thừa cân')
} else if (Bmi > 25 && Bmi <= 29.9) {
    alert('Bạn thuộc dạng tiền béo phì')
} else if (Bmi >= 30 && Bmi <= 34.9) {
    alert ('Bạn thuộc dạng béo phì độ I')
} else if (Bmi >= 35 && Bmi <= 39.9) {
    alert('Bạn thuộc dạng béo phì độ II')
} else {
    alert('Bạn thuộc dạng béo phì độ III')
}