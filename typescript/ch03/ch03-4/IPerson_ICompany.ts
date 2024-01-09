// 구조화가 필요한 코드 예시
let personName = 'Jack';
let personAge = 32;

let companyName = 'Apple Company, Inc';
let companyAge = 43;

// 위 코드를 구조화한 코드
export interface IPerson {
    name: string;
    age: number;
}

export interface ICompany {
    name: string;
    age: number;
}
