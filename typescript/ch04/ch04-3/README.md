# 화살표 함수와 표현식 문

## 화살표 함수

    ESNext 자바스크립트와 타입스크립트는 function 키워드가 아닌 => 기호로 만드는 화살표 함수를 제공한다.

    ```typescript
        const 함수이름 = (매개변수1:타입1, 매개변수2: 타입2[, ...]) : 반환 타입 => 함수 몸통

        const 함수이름 = (매개변수1:타입1, 매개변수2: 타입2[, ...]) : 반환 타입 => {return a + b } 실행문 방식 몸통
        const 함수이름 = (매개변수1:타입1, 매개변수2: 타입2[, ...]) : 반환 타입 => a + b           표현식 문 방식 몸통
    ```

## 복합 실행문

    프로그래밍 언어에서는 if와 같은 구문은 조건을 만족하면 단순히 한 줄의 실행문만을 실행하는 형태로 설계한다.

    하지만 이러한 구문에 중괄호 안에 실행문이 한개 이상이 들어가있는 복합 실행문이라는 형태를 제공한다.
    복합 실행문은 컴파이럴로 하여금 여러 실행문을 한 개처럼 인식하게 한다.

## 함수 몸통과 복합 실행문

    function 키워드로 만드는 함수는 반드시 몸통을 중괄호로 감싸야 하는데, 여기서 중괄호는 복합 실행문을 의미한다.

## return 키워드

    실행문은 CPU에서 실행된 결과를 알려주지 않는다.
    예를 들어, 함수 몸통을 복합 실행문으로 구현한 다음 함수는 true나 false를 반환하지 않기 때문에
    실행문 기반 언어는 이 문제를 해결하려고 return이라는 키워드를 도입했다.

    하지만 return 키워드는 반드시 함수 몸통에서만 사용할 수 있다는 제약이 있다.
    이러한 제약은 문법을 잘못 이해해 코드를 잘못 작성하는 것을 방지하려는 의도이다.
