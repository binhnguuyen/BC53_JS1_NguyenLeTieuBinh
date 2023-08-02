// Global variables
var style = "currency";
var currenry = "VND"

// Bài số 1
function salaryCounting() {
    // B1
    var salaryPerDay = 100000;

    // B2
    var workdays = +document.getElementById("workdays").value;
    var salary = salaryPerDay * workdays;
    var result1 = document.getElementById("result1");

    // B3
    // console.log("Lương nhân viên là", salaryPerDay, "VND trên một ngày thì làm", workdays, "được tổng lương là:", salary.toLocaleString('it-IT', { style: style, currency: currenry }))
    result1.innerHTML = `
    <div>
        <span>Với mức lương ${salaryPerDay.toLocaleString('it-IT', { style: style, currency: currenry })} trên ngày</span>
        <span>làm ${workdays} trên tháng thì </span>
        <span>tiền lương là: ${salary.toLocaleString('it-IT', { style: style, currency: currenry })}</span>
    </div> 
    `
    result1.classList.add("bg-primary","text-white");
}



// Bài số 2
// B1
function averageValueCounting() {
    // B1
    var number1  = +document.getElementById("number1").value;
    var number2  = +document.getElementById("number2").value;
    var number3  = +document.getElementById("number3").value;
    var number4  = +document.getElementById("number4").value;
    var number5  = +document.getElementById("number5").value;
    var result2 = document.getElementById("result2");

    // B2
    var averageValue = ( number1 + number2 + number3 + number4 + number5 ) / 5;

    // B3
    result2.innerHTML = `
    <div>
        <span>Giá trị trung bình của 5 số thực ${number1},${number2},${number3},${number4},${number5} là: ${averageValue}</span>
    </div> 
    `
    result2.classList.add("bg-primary","text-white");
}

// Bài số 3
function USDtoVNDCounting() {
    // B1
    var VNDperUSD = 23500;
    var moneyInUSD = +document.getElementById("moneyInUSD").value;
    var result3 = document.getElementById("result3");

    // B2
    var moneyInVND = VNDperUSD * moneyInUSD;

    // B3
    result3.innerHTML = `
    <div>
        <span>Với ${moneyInUSD} USD</span>
        <span>thì có thể đổi đc ${moneyInVND.toLocaleString('it-IT', { style: style, currency: currenry })}</span>
    </div> 
    `
    result3.classList.add("bg-primary","text-white");
}
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
console.log("Tổng của 2 số trong 1 số có 2 chữ số", n, "là:", sum);








