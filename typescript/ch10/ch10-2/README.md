## 제네릭 타입 제약

# 제네릭 타입 제약 (printValueT.ts(제네릭 타입 제약 구문 구현), printValueT-test.ts(사용법) 참조)

프로그래밍 언어에서 제네릭 타입 제약은 타입 변수에 적용할 수 있는 타입의 범위를 한정하는 기능을 한다.

타입스크립트에서 제네릭 함수의 타입을 제한하고 싶을 때 사용되는 구문

<최종 타입1 extends 타입1, 최종 타입2 extends 타입2>(a: 최종 타입1, b: 최종 타입2, ...){}

# new 타입 제약 (create.ts, create-test.ts 참조)

프로그래밍 분야에서 팩토리 함수는 new 연산자를 사용해 객체를 생성하는 기능을 하는 의미한다.

보통 팩토리 함수는 객체를 생성하는 방법이 지나치게 복잡할 때 이를 단순화하려는 목적으로 구현한다.

하지만 타입스크립트 컴파일러는 타입의 타입을 허용하지 않아 오류가 발생하는데 C# 언어에서의 구문을 빌려서

타입스크립트 구문으로 만들어서 사용이 가능하다.

# 인덱스 타입 제약 (pick.ts, pick-test.ts 참조)

코드를 작성할 때 키 값이 오타가 발생하면 엉뚱한 결과나 오류가 발생하는데,
타입스크립트는 이러한 상황을 방지할 목적으로 keyof T 형태로 타입 제약을 설정할 수 있게 지원한다.
이것을 '인덱스 타입 제약' 이라고 한다.

그 후에 타입 제약을 지정하여 사용하면 컴파일을 해보지 않고도 입력 오류를 코드 작성 시점에서 탐지할 수 있다.