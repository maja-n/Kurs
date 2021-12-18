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
        this._barcode=value;
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
        return this._qty
    }

    set price(value) {
        this._price=value;
    }

    get price() {
        return this._price;
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
    _fat = 0;

    constructor(name, barcode, fat) {
        super(name, barcode);
        this.unit="L"
        this.qty=1
        this.price=100
        this.stock=500
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
        super(name, barcode)
        this.unit="g"
        this.qty=1
        this.price=50
        this.stock=250
        this.type=type;
    }

    set type(value) {
        this._type=value
    }

    get type() {
        return this._type;
    }
}

let mleko = new Milk("Alpsko", "53252", 2.8);
let hleb = new Bread("Psenicni", "35252", "T-500");

console.log(`Mleko ${mleko.name} ${mleko.fat}% (${mleko.price}RSD/ ${mleko.unit}) na zalihama ${mleko.qty} kom`);
console.log(`Hleb ${hleb.name} ${hleb.type} (${hleb.price} RSD/${hleb.unit}) na zalihama ${hleb.stock} kom`);