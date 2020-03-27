//1
console.log(1 == 2) //0
console.log(1 != 2) //1
console.log(1 == 1) //1
console.log(1 != 1) //0
console.log("text" == 5) //0
console.log("text" != 5) //1
console.log("text" == "Text") //0
console.log("text" == "text") //1
console.log(true == "true") //0
console.log(true == false) //0
console.log(false == 0) //1
console.log(false === 0) //0
console.log("" == false) //1
console.log("" !== false) //0
console.log(undefined === null) //0
console.log(undefined == null) //1
console.log(17 === true) //0
console.log("17" === true) //0
console.log({} === {}) //0

//2
console.log(!!((+prompt("Введите число", "") + 1) % 2))

//3
console.log(!!(+prompt("Введите число", "") % 2))

//4
var a = 4;
a += 7;
a *= 2;
a %= 3;
console.log (a)

//5
var a = "100"
a = +a
a = Number (a)
a /= 1

//6
var a = Math.floor(Math.random() * 100) // без округления бывает ложь
var b = Math.floor(Math.random() * 100)
console.log(!!((a + b)*(a - b) == a**2 - b**2))

//***1
alert ((+prompt("First number", "") + 10) + (+prompt("Second number", "") + 10) + (+prompt("Third number", "") + 10))

//***2
var a =+prompt("First triangle side", "2")
var b =+prompt("Second triangle side", "3")
var c =+prompt("Third triangle side", "4")
alert(!!((a + b > c) && (b + c > a) && (a + c > b)))

//***3
var a = Math.floor(Math.random() * 100) // без округления бывает ложь
var b = Math.floor(Math.random() * 100)
console.log(!!((a + b) ** 3 == a ** 3 + 3 * (a ** 2) * b + 3 * a * (b ** 2) + b ** 3))