import { IPerson } from './IPerson_ICompany';

// 비구조화
let jack: IPerson = { name: 'Jack', age: 32 };

// 비구조화 할당
let { name, age } = jack;
console.log(name, age); // Jack 32
