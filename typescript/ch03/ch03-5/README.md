# 객체의 타입 변환

## 타입 변환 (type-conversion.ts 참조)

    타입이 있는 언어들은 특정 타입의 변숫값을 다른 타입의 값으로 변환할 수 있는 기능을 제공한다.
    이것을 타입 변환이라고 한다.

## 타입 단언 (INameable.ts, type-assertion.ts 참조)

    타입스크립트에서는 자바스크립트의 타입 변환 구문과 다르게 작성하기 때문에 구분을 하기위해,
    타입스크립트에서는 타입 변환이 아닌 타입 단언이라는 용어를 사용한다.

    ```typescript
    (<타입>객체)
    (객체 as 타입)
    ```
