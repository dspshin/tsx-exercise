// enum test
enum state {
    SUCCESS = 200,
    ERROR = 500,
    WARNING = 400,
}
function runState() {
    let res;
    try {
        res = state.SUCCESS;
    } catch (error) {
        res = state.ERROR;
    } finally {
        res = state.WARNING;
    }
    return res;
}
console.log('runState:', runState());

// type inference
let num = 1;
// num = '2';
const person1 = {
    name: "sdf" as const,
    age: 22,
}
// person1.name = 'zxc';

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers.push('7');
const numbersAndString = [1, 2, 3, '4', '5', '6'];
numbersAndString.push(7);
numbersAndString.push('8');

// casting
// js로 변환되면 의미가 없다?
let num1 = 1;
// console.log((num1 as any).toUpperCase());

// union
type strlistOrBoollist = string[] | boolean[];
const list1: strlistOrBoollist = ['a', 'b', 'c'];
const list2: strlistOrBoollist = [true, false];
// const list3: strlistOrBoollist = ['a', false];

// function
function printName(name: string) {
    console.log(name);
}
const printName2 = (name: string): void => {
    console.log(name);
}

type printNameType = (name: string) => void;
const printName3: printNameType = (name) => {
    console.log(name);
}

interface IPerson {
    name: string;
    age: number;
}
type TPerson = {
    name: string,
    age: number
}
const person2: IPerson = {
    name: "sdf",
    age: 22,
}
const person3: TPerson = {
    name: "sdf",
    age: 22,
};

// class
class Game {
    name: string;
    download: number;
    constructor(name: string, download: number) {
        this.download = download;
        this.name = name;
    }
    print() {
        console.log(this.name, this.download);
    }
}
const game1 = new Game('starcraft', 1000000);
game1.print();

class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class Child extends Parent {
    age: number;
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    printChild() {
        console.log(this.name, this.age);
    }
}
const parent1 = new Parent('parent1');
parent1.print();
const child1 = new Child('child1', 22);
child1.print();
child1.printChild();

// generic
function whatValue<T>(arg: T): T {
    return arg;
}
const num2 = whatValue(1);
const str2 = whatValue('1');

interface cache<T = number> {
    data: T[];
    lastModified: Date;
}
const cache1: cache = {
    data: [1, 2, 3],
    lastModified: new Date(),
}