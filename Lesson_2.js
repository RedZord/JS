
// Task 1
// Пример 1
let a = 1, b = 1, c, d;
c = ++a
alert(c);   // Ответ: 2

/* Ответ:
    c = ++a;  ==>  c = a + 1;
*/

// Пример 2
d = b++;
alert(d);   // Ответ: 1

/* Ответ:
   d = b++;  ==>  d = b;  после  b = b + 1;
*/

// Пример 3
c = 2 + ++a;     // a == 2;
alert(c);    // Ответ: 5

/* Ответ:
   c = 2 + ++a;  ==>   c = 2 + 2 + 1;
*/

// Пример 4
d = 2 + b++;    // b = 2;
alert(d);   // Ответ: 4

/* Ответ:
   d = 2 + b++;  ==>  d = 2 + 2;  после  b = b + 1;
*/


// Task 2
let a = 2;
let x = 1 + (a *= 2)    // Ответ: 5 

/*
    1. "а" присваивается значение 2.
    2. "x" присваивается значение выражения "1 + (a *= 2)".
        a) (a *= 2) эквивалентно: a = a (2) * 2 == 4
        б) 1 + a (4) 
*/


// Task 3
let a = -10, b = 7;

function main(num1, num2){
    if (num1 >= 0 && num2 >= 0){
        return num1 - num2;
    } else if (num1 < 0 && num2 < 0){
        return num1 * num2;
    } else {
        return num1 + num2;
    }
}

alert(main(a, b))


// Task 4
let num1 = 10, num2 = 2;

function sum(num1, num2){
    return num1 + num2;
};

function mul(num1, num2){
    return num1 * num2;
};

function subtr(num1, num2){
    return num1 - num2;
};

function div(num1, num2){
    return num1 / num2;
};


alert(`Сумма 10 и 2: ${sum(num1, num2)}`);
alert(`Умножение 10 и 2: ${mul(num1, num2)}`);
alert(`Разность 10 и 2: ${subtr(num1, num2)}`);
alert(`Деление 10 и 2: ${div(num1, num2)}`);


// Task 5
function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case '+':
            alert(`Ответ: ${sum(arg1, arg2)}`)
            break;
        case '*':
            alert(`Ответ: ${mul(arg1, arg2)}`)
            break;
        case '-':
            alert(`Ответ: ${subtr(arg1, arg2)}`)
            break;
        case '/':
            alert(`Ответ: ${div(arg1, arg2)}`)
            break;
        default:
            alert("Введен не верный оператор!")
    };
};

mathOperation(num1, num2, "+");
mathOperation(num1, num2, "*");
mathOperation(num1, num2, "-");
mathOperation(num1, num2, "/");

// Task 6
function getRemainder(num){
    return num % 10;
};


let currentCash = prompt("Какое количество рублей, вы хочету положить на счет в банке?");

if (getRemainder(currentCash) == 1 && currentCash != 11){
    alert(`Ваша сумма в ${currentCash} рубль успешно зачислена.`)
} else if (getRemainder(currentCash) >= 2 && getRemainder(currentCash) <= 4  && currentCash != 12 && currentCash != 13 && currentCash != 14){
    alert(`Ваша сумма в ${currentCash} рубля успешно зачислена.`)
} else {
    alert(`Ваша сумма в ${currentCash} рублей успешно зачислена.`)
};
