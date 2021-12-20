'use strict'

class Display {
    static displayAsCurrency(price) { 
        return (String (price + "RSD"));
    }
}

console.log(Display.displayAsCurrency(100));

console.log(Display.displayAsCurrency(241));