'use strict';

// Task 1
function numToObj(number) {
    if (!Number.isInteger(number)) {
        return number + ' is not integer!';
    }

    if (0 > number || number > 999) {
        return number + ' is not in the required range!';
    }

    console.log('Current number: ' + number);

    let units = number % 10;
    let hundreds = Math.floor(number / 100);
    let tens = (number - hundreds * 100 - units) / 10;

    let obj = {
        units: units,
        tens: tens,
        hundreds: hundreds
    }

    return obj;
}

console.log(numToObj('lorem'));
console.log(numToObj(1000));
console.log(numToObj(-1000));
console.log(numToObj(12.35));
console.log(numToObj(Math.floor(Math.random() * 999)));


// Task 1.1
//ES5
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function () {
    this.price -= this.price / 4;
    alert('Current price(ES5): ' + this.price);
}


let prod1 = new ProductES5('Phone', 1000);
prod1.make25PercentDiscount();


//ES6
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price / 4;
        alert('Current price(ES6): ' + this.price);
    }
}


let prod2 = new ProductES6('Phone', 2000);
prod2.make25PercentDiscount();

// Task 1.2
//ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function (text) {
    this.text = text;
    console.log(this.text);
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
    console.log(this.highlighted);
}


let obj_1_ES5 = new PostES5('Pushkin', 'lorem', '01.01.2020');
obj_1_ES5.edit('merol');

let obj_2_ES5 = new AttachedPostES5('Pushkin', 'lorem', '01.01.2020');
obj_2_ES5.edit('merol');
obj_2_ES5.makeTextHighlighted();


//ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
        console.log(this.text);
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(this.highlighted);
    }
}


let obj_1_ES6 = new PostES6('Pushkin', 'lorem', '01.01.2020');
obj_1_ES6.edit('merol');

let obj_2_ES6 = new AttachedPostES6('Pushkin', 'lorem', '01.01.2020');
obj_2_ES6.edit('merol');
obj_2_ES6.makeTextHighlighted();

// Task 2



// Task 3
