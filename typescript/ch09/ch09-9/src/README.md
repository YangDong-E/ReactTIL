## 배열 다루기

# R.prepend와 R.append 함수 (prepend-test.ts, append-test.ts 참조)

두 함수는 기존 배열의 앞뒤에 새 아이템을 삽입한 새 배열을 만들어 준다.
순수 함수 관점에서는 기존 배열에 아이템을 직접 삽입하면 기존 배열의 내용을 훼손하게 되므로 이 함수들이 만들어졌다.

# R.flatten 함수 (flatten-test.ts 참조)

R.flatten 함수는 배열의 구조가 복잡하게 구성되어 있으면, 람다 라이브러리의 기능을 적용하기 힘들다.
그래서 R.flatten 함수를 사용하여 복잡한 배열을 1차원의 평평한 배열로 바꿔준 뒤 람다 라이브러리의 기능을 적용시킨다.

# R.unnest 함수 (unnest-test.ts 참조)

R.unnest 함수는 R.flatten보다 조금 정교하게 배열을 가공해준다.

# R.sort 함수 (sort-test.ts 참조)

배열의 타입이 number[]라면 R.sort 함수를 사용해 배열을 내림차순이나 오름차순으로 정렬할 수 있다.

# R.sortBy 함수 (sortBy-test.ts 참조)

배열에 담긴 아이템이 객체라면 특정 속성값에 따라 정렬해야 하는데, 이때 R.sortBy 함수를 사용한다.

# R.sortWith 함수 (sortWith-test.ts 참조)

R.sortBy 함수는 오름차순, 내림차순 정렬을 구분해서 하지 못하고 항상 오름차순으로만 정렬을 한다.
하지만 R.sortWith 함수는 R.ascend, R.descend 함수와 함께 사용되어 오름차순, 내림차순 정렬을 할 수 있다.

- 이 함수를 작성하다가 오류가 발생했는데 문법에 맞게 작성했음에도 오류가 발생하여 문제점을 찾지 못하여 추가 공부가 필요할 것 같다.
