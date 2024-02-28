## 제네릭 타입 이해하기

# 제네릭 타입

제네릭 타입은 인터페이스나 클래스, 함수, 타입 별칭등에 사용할 수 있는 기능으로
해당 심벌의 타입을 미리 지정하지 않고 다양한 타입에 대응하려고 할 때 사용한다.

# 제네릭 사용하기

IValuable.ts 에서 제네릭 인터페이스를 정의

Valuable.ts 에서 인터페이스 쪽으로 제네릭 타입 변수로 넘김

printValue.ts 에서 IValuable<T> 와 Valuable<T>를 사용하는 제네릭 함수를 만들어서 다양한 타입을 대상으로 동작하게 만든다.

printValute-test.ts, printValue-test2.ts로 사용가능
