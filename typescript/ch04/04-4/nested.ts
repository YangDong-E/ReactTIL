// const calc = (value: number, cb: (number) => void): void => {
const calc = (value: number, cb: (arg: number) => void): void => {
    // let add = (a, b) => a + b
    // function multiply(a, b) {
    //   return a * b
    // }
    let add = (a: number, b: number) => a + b;
    function multiply(a: number, b: number) {
        return a * b;
    }

    let result = multiply(add(1, 2), value);
    cb(result);
};
calc(30, (result: number) => console.log(`result is ${result}`)); // result is 90
