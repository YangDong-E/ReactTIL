## 타입 가드

# instanceof 연산자 (flyOrSwim.ts 참조)

자바스크립트는 instanceof라는 이름의 연산자를 제공한다.
이 연산자는 두 개의 피연산자가 필요하다.

# 타입 가드 (flyOrSwim.ts, flyOrSwim-test.ts 참조)

타입스크립트에서 instanceof 연산자는 자바스크립트와는 다르게 '타입 가드'기능이 있다.
타입 가드는 타입을 변환하지 않은 코드 때문에 프로그램이 비정상으로 종료되는 상황을 보호해 준다는 의미이다.

# is 연산자를 활용한 사용자 정의 타입 가드 함수 제작 (ifFlyable.ts, isSwimmable.ts, swimOrFly.ts, swimOrFly-test.ts 참조)

개발자 코드에서 instanceof처럼 동작하는 함수를 구현할 수 있는데, 이것은 타입 가드 기능을 하는 함수를 구현할 수 있다는 말이다.

타입 가드 기능을 하는 함수는 함수의 반환 타입 부분에 is라는 이름의 연산자를 사용해야 한다.
