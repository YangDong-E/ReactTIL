/*
TS7006 오류 해결 방법은 매개 변수 a, b에 타입을 명시하는 것입니다.
*/
//let f = function(a, b) { return a + b; }
// f = function(a, b) { return a - b; }
let f = function (a: number, b: number) {
    return a + b;
};
f = function (a: number, b: number) {
    return a - b;
};
