'use strict'

// 1. zadatak
let foodproducers=["Bambi", "Neoplanta", "Podravka"];

foodproducers.unshift("Barilla");
foodproducers.push("Meggle", "Yuhor");

// 2. zadatak
console.log(foodproducers)

for (let i=0; i < foodproducers.length; i++) {
    console.log(foodproducers[i]);   
}

// 3. zadatak
function deleteSomething (value) {
    let index = foodproducers.indexOf(value);

    if (index > -1) {
        foodproducers.splice(index, 1);
    }
}
deleteSomething ("Neoplanta")

console.log(foodproducers)

//daj da napravim ja kao nesto 

function deleteSomething(value) {
    let index = foodproducers.indexOf(value);

    if (index > -1) {
        foodproducers.splice(index, 1)
    }
}

deleteSomething("Podravka")

console.log(foodproducers)

// sledece

let makeupbrands = ['Mac', 'Dior', 'Lancome', 'Bourjois', 'Chanel']

console.log(makeupbrands)

makeupbrands.unshift('Benefit')
makeupbrands.push('Huda')
console.log(makeupbrands)

class favoritebrand {

    constructor(name) {
        this.name = name;
    }

    printName() {
       console.log(`My favorite makeup brand is ${this.name}`);
    }
}
let brand = new favoritebrand("Mac");

brand.printName();

let anotherbrand = new favoritebrand("Chanel");

anotherbrand.printName();


//jos klasa 
class Animal {
    
    constructor(name) {
       this.name=name;
    }

    whatColour(shade) {
        this.shade=shade;
        console.log(`${this.name} is ${this.shade}.`);
    }
}
    let hipppopotamus = new Animal("Hippo");

    hipppopotamus.whatColour("grey");

    let bunny = new Animal("Rabbit")
    bunny.whatColour("white");

    //neka druga klasa sa automobilima

    class Cars {
        constructor(name) {
            this.name=name;

        }
        whatShade(shade) {
            this.shade=shade;
            console.log(`${this.name} is ${this.shade}.`)

        }
        howmanydoors(doors) {
            this.doors=doors;
            console.log(`${this.name} has ${this.doors} doors.`);
        }
    

    }
    let fiatPunto = new Cars('Fiat Punto');
    fiatPunto.whatShade("orange");
    fiatPunto.howmanydoors("5");

    // prekucavanje koda za stockovanje marketa 

    class Product {
        _name="";
        _barcode="";
        _unit="";
        _qty="";
        _price="";
        _stock=0;

        constructor(name, barcode) {
            this.name=name;
            this.barcode=barcode;
        }

        set name(value) {
            this._name=value;
        }

        get name() {
            return this._name;
        }

        set barcodecode(value) {
            this.barcode=value;
        }

        get barcode() {
            return this._barcode;
        }
    }