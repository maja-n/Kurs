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

        set barcode(value) {
            this.barcode=value;
        }
        get barcode() {
            return this._barcode;
        }
        set unit(value) {
            this._unit=value;
        }
        get unit() {
            return this._unit;
        }
        set qty(value) {
            this._qty=value;
        }
        get qty() {
            return this._qty;
        }
        set stock(value) {
            this._stock=value;
        }
        get stock() {
            return this._stock;
        }

        sell(qty=1) {
            this._stock -= qty;
        }

        restock(qty=1) {
            this._stock += qty;
        }
    }

    class Milk extends Product {
        _fat=0;

        constructor(name, barcode, fat) {
            super(name, barcode);
            this.unit= "L";
            this.qty= 1;
            this.price= 100;
            this.stock= 500;
            this.fat=fat;
        }

        set fat(value) {
            this._fat=value;
        }

        get fat() {
            return this._fat;
        }
    }

    class Bread extends Product {
        _type="";

        constructor(name, barcode, type) {
            super(name, barcode);
            this.unit="g";
            this.qty=1;
            this.price=50;
            this.stock=250;
            this.type=type;
        }

        set type(value) {
            this._type=value;
        }

        get type() {
            return this._type;
        }
    }

    let mleko = new Milk("Alpsko" , "434242" , 3.5);
    let hleb = new Bread("Psenicni beli", "23434332", "T-500");