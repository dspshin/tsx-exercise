/**
 * Enum (열거형) 테스트
 * 연관된 상수들의 집합을 정의합니다.
 * 기본적으로 0부터 시작하는 숫자가 할당되지만, 아래처럼 원하는 값을 지정할 수도 있습니다.
 * 코드의 가독성을 높이고 상수의 관리를 용이하게 합니다.
 */
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

/**
 * Type Inference (타입 추론)
 * 변수 선언 시 타입을 명시하지 않아도, 할당된 값에 따라 TypeScript가 타입을 자동으로 추론합니다.
 */
let num = 1;
// num = '2';
// 'as const'를 사용하여 객체의 속성을 읽기 전용(readonly) 리터럴 타입으로 추론하게 합니다.
// 즉, name은 string이 아니라 "sdf"라는 구체적인 값만 가질 수 있고, 변경이 불가능해집니다.
const person1 = {
    name: "sdf" as const,
    age: 22,
}
// person1.name = 'zxc';

// 배열의 요소들을 보고 number[] 타입으로 자동 추론됩니다.
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers.push('7');
// 숫자와 문자열이 섞여 있으므로 (string | number)[] 타입으로 추론됩니다.
const numbersAndString = [1, 2, 3, '4', '5', '6'];
numbersAndString.push(7);
numbersAndString.push('8');

/**
 * Type Assertion (타입 단언 / 캐스팅)
 * 개발자가 컴파일러보다 타입에 대해 더 잘 알고 있을 때, 강제로 타입을 지정하는 방법입니다.
 * TypeScript의 컴파일 단계에서만 유효하며, 컴파일된 JavaScript 코드에는 영향을 주지 않습니다 (런타임 오버헤드 없음).
 * 'as' 키워드나 '<Type>' 문법을 사용합니다.
 */
// js로 변환되면 타입 단언 코드는 사라지므로 런타임 로직에는 영향을 주지 않습니다.
let num1 = 1;
// console.log((num1 as any).toUpperCase());

/**
 * Union Type (유니온 타입)
 * '|' 연산자를 사용하여 변수가 여러 타입 중 하나를 가질 수 있음을 정의합니다.
 * 마치 OR 연산자처럼 동작하여 유연성을 제공합니다.
 */
type strlistOrBoollist = string[] | boolean[];
const list1: strlistOrBoollist = ['a', 'b', 'c'];
const list2: strlistOrBoollist = [true, false];
// const list3: strlistOrBoollist = ['a', false];

/**
 * Function (함수)
 * 함수의 매개변수와 반환값에 타입을 명시하여 타입 안정성을 보장합니다.
 * 반환값이 없는 경우 'void' 타입을 사용합니다.
 */
function printName(name: string) {
    console.log(name);
}
const printName2 = (name: string): void => {
    console.log(name);
}

// 함수 타입 별칭(Type Alias)을 사용하여 함수의 시그니처를 정의할 수도 있습니다.
type printNameType = (name: string) => void;
const printName3: printNameType = (name) => {
    console.log(name);
}

/**
 * Interface vs Type Alias
 * 객체의 타입을 정의하는 두 가지 주요 방법입니다.
 * - Interface: 주로 객체의 구조(shape)를 정의하며, 상속(extends)과 선언 병합(declaration merging)을 지원합니다.
 * - Type Alias (**type**): 유니온, 튜플 등 더 복잡하거나 다양한 타입을 정의할 때 유용합니다.
 */
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

/**
 * Class (클래스)
 * 속성(멤버 변수)과 메서드(멤버 함수)를 포함하는 객체 템플릿입니다.
 * TypeScript에서는 접근 제어자(public, private, protected)나 멤버 변수의 타입을 명시할 수 있습니다.
 */
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

/**
 * Inheritance (상속)
 * 'extends' 키워드를 사용하여 기존 클래스(부모)를 확장하여 새로운 클래스(자식)를 만듭니다.
 * 자식 클래스는 부모 클래스의 속성과 메서드를 상속받으며, 'super'를 통해 부모의 생성자나 메서드에 접근할 수 있습니다.
 */
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

/**
 * Generic (제네릭)
 * 타입을 마치 함수의 파라미터처럼 사용하여, 재사용성을 높이는 기법입니다.
 * 호출하는 시점에 구체적인 타입이 결정되므로 유연하면서도 타입 안전성을 유지할 수 있습니다.
 * <T>와 같은 형태로 타입 변수를 선언하여 사용합니다.
 */
function whatValue<T>(arg: T): T {
    return arg;
}
const num2 = whatValue(1);
const str2 = whatValue('1');

// 제네릭 인터페이스: 인터페이스 정의 시 타입 파라미터를 사용할 수 있습니다.
// <T = number>는 T에 타입이 지정되지 않았을 때의 기본값을 number로 설정합니다.
interface cache<T = number> {
    data: T[];
    lastModified: Date;
}
const cache1: cache = {
    data: [1, 2, 3],
    lastModified: new Date(),
}

/**
 * Async / Await
 * 비동기 프로그래밍을 더 직관적이고 동기 코드처럼 작성하기 위해 사용합니다.
 * - async: 함수 앞에 붙여서 해당 함수가 항상 Promise를 반환함을 명시합니다.
 * - await: async 함수 내부에서만 사용 가능하며, Promise가 처리(resolve/reject)될 때까지 실행을 일시 정지하고 기다립니다.
 *
 * 왜 사용하는가?
 * 1. 가독성 향상: .then() .catch() 체이닝 지옥(Callback Hell)을 피할 수 있습니다.
 * 2. 에러 처리: 동기 코드처럼 try-catch 문을 사용하여 에러를 처리할 수 있습니다.
 * 3. 디버깅 용이: 비동기 코드의 흐름을 파악하기 쉽습니다.
 */

// 예제 1: Promise만 사용할 때
function delayPromise(ms: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Done"), ms));
}
// delayPromise(1000).then(res => console.log(res));

// 예제 2: Async/Await 사용할 때
// 중요: 내부에서 'await' 키워드를 사용하려면 함수가 반드시 'async'여야 합니다.
// 또한 async 함수는 항상 Promise를 반환합니다. (return이 없으면 Promise<void>)
// 참고: 여기서 Promise<void>의 < >는 제네릭입니다. Promise는 내부적으로 class Promise<T> 처럼 정의된 제네릭 타입입니다.
// T는 비동기 작업이 성공(resolve)했을 때 반환되는 값의 타입입니다.
async function runAsyncTest(): Promise<void> {
    try {
        console.log("시작");
        // 비동기 작업이 끝날 때까지 여기서 '기다립니다'
        const result = await delayPromise(3000);
        console.log("결과:", result); // 3초 뒤 실행
    } catch (error) {
        console.error("에러 발생:", error);
    }
}
runAsyncTest();

// 참고: await이 없다면?
// 1. 단순히 동기 함수라면 async를 뺄 수 있습니다.
// 2. 하지만 async를 유지하면, 무조건 Promise를 반환하게 됩니다.
async function asyncWithoutAwait() {
    return 1;
}
// const ret = asyncWithoutAwait(); // ret는 Promise<number> 타입입니다.

/**
 * Generator (제너레이터)
 * 함수의 실행을 중간에 멈췄다가(suspend) 다시 재개(resume)할 수 있는 특별한 함수입니다.
 * - function* 문법을 사용하여 정의합니다.
 * - yield 키워드를 사용하여 값을 반환하고 실행을 멈춥니다.
 * - next() 메서드를 호출하여 제너레이터를 다시 시작합니다.
 * - 반환값은 { value: T, done: boolean } 형태의 객체입니다.
 */
function* simpleGenerator() {
    console.log("제너레이터 시작");
    yield 1;
    console.log("제너레이터 재개 1");
    yield 2;
    console.log("제너레이터 재개 2");
    yield 3;
    console.log("제너레이터 종료");
}

const gen = simpleGenerator();
// next()를 호출할 때마다 yield를 만날 때까지 실행되고 멈춥니다.
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true } (더 이상 yield할 값이 없음)

// 활용 예제: ID 생성기 (무한 루프도 제너레이터에서는 문제없이 사용 가능합니다)
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const idGen = idGenerator();
console.log(idGen.next().value); // 1
console.log(idGen.next().value); // 2
console.log(idGen.next().value); // 3