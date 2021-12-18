'use strict'

class Person {
    _occupation="";
    _name="";

    constructor(occupation, name) {
        this.occupation=occupation;
        this.name=name;
    }

    set occupation(value) {
        this._occupation=value;
    }

    get occupation() {
        return this._occupation;
    }

    set name(value) {
        this._name=value;
    }

    get name() {
        return this._name;
    }

    introduce() {
        console.log(`${this.name} is a ${this.occupation}.`)
    }
}

class Student extends Person {
    _grade="";

    constructor(name, occupation, grade) {
        super(name, occupation);
        this.grade=grade;
    }

    set grade(value) {
        this._grade=value;
    }

    get grade() {
        return this._grade;
    }

    doeswhat() {
        console.log(`${this. name} is in Grade ${this.grade}.`)
    }
}

class Teacher extends Person {
    _subject="";

    constructor(name, occupation, subject) {
        super(name, occupation);
        this.subject=subject;
    }

    set subject(value) {
        this._subject=value;
    }

    get subject() {
        return this._subject;
    }

    doeswhat() {
        console.log(`${this. name} teaches ${this.subject}.`)
    }
}

let ucenik = new Student("student","Mark", "5")
let nastavnica = new Teacher("teacher", "Miss Peterson", "Math")

ucenik.introduce();
ucenik.doeswhat();

nastavnica.introduce();
nastavnica.doeswhat();

let ucenica= new Student("student", "Sally", "2");
let nastavnik= new Teacher("teacher", "Mr Brown", "PE")

ucenica.introduce();
ucenica.doeswhat();

nastavnik.introduce();
nastavnik.doeswhat();
