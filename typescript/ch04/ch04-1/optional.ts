interface IAgeable {
    age?: number;
}
//function getAge(o: IAgeable) {
function getAge(o: IAgeable | null | undefined) {
    return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined)); //0
console.log(getAge(null)); //0
console.log(getAge({ age: 32 })); // 32
