/*
@ts-nocheck 을 사용하여 컴파일러로 하여금 너무 엄격하게 코드를 해석하지 않도록 했다.
*/
// @ts-nocheck

class Person1 {
    name: string;
    age?: number;
}
let jack1: Person1 = new Person1();
jack1.name = 'Jack';
jack1.age = 32;
console.log(jack1);
