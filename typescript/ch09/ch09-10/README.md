## 조합 논리 이해하기

# 조합자란?

조합 논리학은 '조합자'라는 특별한 형태의 고차 함수들을 결합해 새로운 조합자를 만들어 내는 것이다.
이것은 함수형 언어의 컴파일러를 만드는 데 필요한 이론을 검증하고 개발할 때 주로 사용된다.

함수형 라이브러리들은 조합 논리로 개발된 몇 가지 유용한 조합자들을 제공하는데, 람다 라이브러리 또한 몇가지 유명한 조합자를 제공한다.

# 람다가 제공하는 조합자

조합자 이름 => 의미 => 람다 함수이름

1. I => identity => R.identity
2. K => constant => R.always
3. T => thrush => R.applyTo
4. W => duplication => R.unnest
5. C => flip => R.flip
6. S => substitution => R.ap

# R.chain 함수(chain-test.ts, flatMap.ts, flatMap-test.ts, chainTwoFunc.ts, chainTwoFunc-test.ts 참조)

람다 라이브러리는 R.chain 함수를 제공하는데, 이 함수는 함수를 매개변수로 받아 동작하는 함수로서
매개변수가 한 개일 때와 두 개일 때의 동작이 다르다.

R.chain 함수는 매개변수가 한 개일 때는 flatMap.ts 파일의 flatMap 함수처럼 동작한다.

R.chain 함수는 매개변수가 두 개일 때는 chainTwoFunc.ts 파일의 chainTwoFunc 함수처럼 동작한다.

# R.flip 조합자 (flip-test.ts 참조)

R.flip 함수는 2차 고차 함수의 매개변수 순서를 서로 바꿔주는 역할을 한다.

# R.identity 조합자 (unnest-using-flatMap.ts, discount.ts 참조)

R.identity는 가장 단순한 조합자이지만, 조합자의 구조상 반드시 함수가 있어야 하는 곳에 위치할 때 그 위력을 발휘한다.
flatMap 함수에서 콜백 함수가 한 개 필요한데, 그 콜백 함수에 R.identity 조합자를 사용하여 R.unnest와 똑같이 동작할 수 있게 할 수 있다.

discount.ts에 구현된 로직은 물건을 구매하고 할인을 해주는 로직을 구현한 예시이기 때문에 추후에 많은 곳에서 사용될 수 있을 것 같다.

# R.always 조합자 (first-second.ts 참조)

R.always 조합자는 두 개의 고차 매개변수 중 첫 번째 것을 반환한다.
이런 특징 때문에 R.always 조합자는 constant라는 의미에서 'K-조합자'라고 하는데, K는 독일어로 'Konstante(상수)'를 의미한다.

R.always는 두 개의 매개변수가 필요한 조합자에 마치 R.identity처럼 사용된다.
R.always는 항상 첫 번째 매개변수값만 반환하지만, R.flip(R.always)는 반대로 항상 두 번째 매개변수값만 반환한다.

# R.applyTo 조합자 (applyTo-test.ts)

R.applyTo 조합자는 특별하게 값을 첫 번째 매개변수로, 그리고 이 값을 입력으로 하는 콜백 함수를 두 번째 매개변수로 받아 동작한다.

# R.ap 조합자 (ap-test.ts, ap-test2.ts, ap-test3.ts)

R.ap 조합자는 콜백 함수들의 배열을 첫 번째 매개변수로, 배열을 두 번째 매개변수로 입력받는 2차 고차 함수이다.

R.ap는 콜백 함수가 한 개일 때는 마치 R.map 함수처럼 동작한다. (ap-test.ts)

R.ap는 콜백 함수가 두 개일 때는 R.chain(n => [n,n]) 형태로 동작한다. (ap-test2.ts)
