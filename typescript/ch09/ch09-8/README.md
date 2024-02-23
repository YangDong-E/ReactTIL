## 객체 다루기

# R.toPairs 와 R.fromPairs 함수(toPairs-test.ts, fromPairs-test.ts 참조)

R.toPairs 함수는 객체의 속성들을 분해해 배열로 만들어준다.
이 배열의 각 아이템은 [string, any] 타입의 튜플이다. ex) [키, 값]

R.fromPairs 함수는 [키:값] 형태의 아이템을 가진 배열을 다시 객체로 만들어 준다.

# R.keys 와 R.values 함수(keys-test.ts, values-test.ts 참조)

R.keys 함수는 객체의 속성 이름만 추려서 string[] 타입 배열로 반환한다.

R.values 함수는 객체의 속성값만 추려서 any[] 타입 배열로 반환한다.

# R.zipObj 함수 (zipObj-test.ts 참조)

R.zipObj 함수는 '키 배열'과 '값 배열'이라는 두가지 매개변수를 결합해 객체로 만들어 준다.

# R.mergeLeft 와 R.mergeRight 함수 (mergeLeft-test.ts, mergeRight-test.ts 참조)

R.mergeLeft 와 R.mergeRight 함수는 두 개의 객체를 입력받아 두 객체의 속성들을 결합해 새로운 객체를 생성한다.

하지만 R.mergeLeft는 (객체1)(객체2)를 입력 받았을때 왼쪽 객체의 우선순위가 높으며,
R.mergeRight는 (객체1)(객체2)를 입력 받았을때 오른쪽 객체의 우선순위가 높다.

우선순위가 높다는 뜻은 객체1과 객체2가 서로 같은 이름의 '속성'이 있지만, '값'은 다를 때 어느 쪽 객체의 것을 선택해서 가져올지 구분하기 위함이다.

# R.mergeDeepLeft 와 R.mergeDeepRight 함수 (mergeDeepRight-test.ts 참조)

R.mergeLeft와 R.mergeRight 함수는 객체의 속성에 담긴 객체를 바꾸지는 못하지만,
R.mergeDeepLeft와 R.mergeDeepRight 함수는 객체의 속성 외에도 경로의 속성 값들도 바꿀 수 있다.

이 함수에 대해서는 좀 더 깊게 생각해보고 공부할 필요가 있을 것 같다.
