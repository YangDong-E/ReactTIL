# 렌즈를 활용한 객체의 속성 다루기

## 렌즈?

렌즈는 하스켈 언어의 Control.Lens 라이브러리 내용 중 자바스크립트에서 동작할 수 있는 게터와 세터 기능만을 람다 함수로 구현한 것이다.
람다의 렌즈 기능을 활용하면 객체의 속성값을 얻거나 설정하는 등의 작업을 쉽게 할 수 있다.

렌즈 기능을 사용하는 진행 방식

1. R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다.
2. 렌즈를 R.view 함수에 적용해 속성값을 얻는다.
3. 렌즈를 R.set 함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다.
4. 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다.

## R.prop 과 R.assoc 함수 (prop.ts 와 assoc.ts 참조)

렌즈 기능을 이해하려면 두 함수를 알아야 하는데,
R.prop 은 'property'의 앞 글자를 따서 만든 이름으로 객체의 특정 속성값을 가져오는 함수로 이런 동작을 하는 함수를 '게터'라고 한다.

R.assoc 함수는 객체의 특정 속성값을 변경할 때 사용되며, 이런 동작을 하는 함수를 '세터'라고 한다.

## R.lens 함수 (lens.ts 참조)

렌즈 기능을 사용할 때 렌즈를 만들어야 하는데, 렌즈는 R.lens, R.prop, R.assoc의 조합으로 만들 수 있다.

## R.view, R.set, R.over 함수 (lens.ts, lens-test.ts 참조)

렌즈를 만든 후에 R.view, R.set, R.over 함수에 렌즈를 적용해서 게터와 세터, 사용할 수 있는 함수를 만들 수 있다.

## R.lensPath 함수(lensPath-test.ts 참조)

객체의 속성값을 알려면 객체의 경로를 지정하는 코드를 작성해야 하는데, 여러 경로를 거치게 되면 코드가 길어지고 보기 힘들어진다.
람다 라이브러리에서는 객체의 이런 중첩 속성을 '경로'라고 하는데 이런 긴 경로의 속성을 렌즈로 만들려면 R.lensPath 함수를 사용하여 만든다.
