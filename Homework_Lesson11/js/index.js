// Bài số 1
// B1
var salaryPerDay = 100000;
var workdayPerMonth = 20;
var style = "currency";
var currenry = "VND"
/*
var workday = Document.getElementById("workdays");
console.log(workday);
*/
// B2
var salary = salaryPerDay * workdayPerMonth
// B3
console.log("Lương nhân viên là", salaryPerDay, "VND trên một ngày thì làm", workdayPerMonth, "được tổng lương là:", salary.toLocaleString('it-IT', { style: style, currency: currenry }))


// Bài số 2
// B1
var number = [1, 2, 3, 4, 5];
// B2
var average = (number[0] + number[1] + number[2] + number[3] + number[4]) / 5;
// B3
console.log("Số trung bình của dãy số", number, "là:", average);


// Bài số 3
// B1
var VNDperUSD = 23500;
var moneyInUSD = 5;
// B2
var moneyUSDtoVND = VNDperUSD * moneyInUSD;
// B3
console.log("Quy đổi", moneyInUSD, "với hiện giá", VNDperUSD, "VND/USD ta được số tiền là:", moneyUSDtoVND.toLocaleString('it-IT', { style: style, currency: currenry }))


// Bài số 4
// B1
var longEdge = 10;
var shortEdge = 5;
// B2
var perimeter = (longEdge + shortEdge) / 2;
var area = longEdge * shortEdge;
// B3
console.log("Chu vi hình chữ nhật với chiều dài", longEdge, "và chiều rộng", shortEdge, "là:", perimeter);
console.log("Diện tích hình chữ nhật với chiều dài", longEdge, "và chiều rộng", shortEdge, "là:", area);


// Bài số 5
// B1
var n = "46";
// B2
var num_string = n.split("");
var sum = 0;
for (var i = 0; i < n.length; i++) {
    num_string[i] = num_string[i] * 1;
    sum += num_string[i];
}
// B3
console.log("Tổng của 2 số trong 1 số có 2 chữ số",n,"là:",sum);








