//Task 1
let tc = +prompt("Enter value in temperature in celsius.");
let tf = (9 / 5) * tc + 32;
alert(`Current temperature Fahrenheit: ${tf}`);

//Task 2
//let name = prompt("Enter your name.");
let name = "Василий";
let admin = name;       // Не понимаю почему перечеркнуто.
console.log(admin);

//Task 3
console.log(10 + 10 + "10");
console.log(10 + "10" + 10);
console.log(10 + 10 + +"10");
console.log(10 / -"");
console.log(10 / +"2,5");
/*
1. 10 + 10 + "10"  ==>  20 + "10"  ==>  "20" + "10"  ==>  "2010"
2. 10 + "10" + 10  ==>  "10" + "10" + 10  ==>  "1010" + 10  ==>  "1010" + "10"  ==>  "101010"
3. 10 + 10 + + "10"  ==>  20 + + "10"  ==>  20 + 10 (Не уверен)  ==>  30 
4. Почему так?!
    let a = -"";
    alert(typeof(a)) // Number
    alert(0 > a); // False
Ответить не могу.
5. 10 / +"2,5"  ==>  10 / NaN (Из-за запятой)  ==>  NaN
*/
