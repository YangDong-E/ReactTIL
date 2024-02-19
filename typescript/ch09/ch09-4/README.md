## 서술자와 조건 연산

# 수의 크기를 판단하는 서술자

람다에서는 수를 비교하여 true나 false를 반환하는 서술자를 제공한다.

1. R.lt(a)(b): boolean = a < b 이면 true a가 b 보다 작음
2. R.lte(a)(b): boolean = a <= b 이면 true a가 b 보다 작거나 같음
3. R.gt(a)(b): boolean = a > b 이면 true a가 b보다 큼
4. R.gte(a)(b): boolean = a >= b 이면 true a가 b보다 크거나 같음

# R.allPass 로직 함수

R.lt, R.gt처럼 boolean 타입의 값을 반환하는 함수들은 R.allPass와 R.anyPass라는 로직 함수를 통해 결합 할 수 있다.

1. R.allPass(서술자 배열) = 배열의 조건을 모두 만족하면 true
2. R.anyPass(서술자 배열) = 배열의 조건을 하나라도 만족하면 true

# R.not 함수

R.not 함수는 이름 그대로 입력값을 반대로 반환한다.(true 이면 false를 반환, false이면 true를 반환)

# R.ifElse 함수

R.ifElse 함수는 세 가지 매개변수를 포함하는데, 첫 번째는 true나 false를 반환하는 서술자를, 두 번째는 선택자가 true를 반환할 때 실행할 함수, 세 번째는 선택자가 false를 반환할 때 실행할 함수이다.
