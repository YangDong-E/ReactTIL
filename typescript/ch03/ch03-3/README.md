# 객체와 클래스

## 클래스 선언문 (Person1.ts 참조)

    타입스크립트에서는 C++나 자바와 같은 객체지향 언어에서 흔히 보이는 class, private,public,protected,implements,extend와 같은 키워드를 제공한다.
    문법적인 차이만 있을 뿐 그 의미는 다른 언어와 같다.

    ```typescript
    class 클래스 {
        [private | protected | public] 속성이름[?]: 속성 타입[...]
       }
    ```

## 접근 제한자

    클래스의 속성은 public,private,protect와 같은 접근 제한자를 이름앞에 붙일 수 있지만, 생략한다면 모두 public으로 간주한다.

## 생성자 (Person2.ts, Person3.ts 참조)

    타입스크립트 클래스는 constructor라는 이름의 특별한 메서드를 포함하는데, 이것을 생성자라고 한다.
    클래스의 속성을 먼저 선언하여 동작시키는데 Person1 과 Person2, Person3는 다른 코드처럼 보이지만 같은 동작을 한다.

## 인터페이스 구현 (Person4.ts 참조)

    다른 객체지향 언어와 마찬가지로 타입스크립트에서도 implements키워드를 사용하여 인터페이스를 구현할 수 있다.
    주의할 점으로는 인터페이스는 이러한 속성이 있어야 한다는 규약이지 물리적으로 해당 속성을 만들지 않는다.
    따라서 클래스 몸통에는 반드시 인터페이스가 정의하는 속성을 멤버 속성으로 포함시켜야 한다.

    ```typescript
    class 클래스 이름 implements 인터페이스 이름{
        ...
    }

    ```

## 추상 클래스 (Person5.ts 참조)

    타입스크립트는 다른 언어처럼 abstract 키워드를 사용하여 추상 클래스를 만들 수 있다.
    abstract 키워드를 class 키워드 앞에 붙여서 만들며, 추상 클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는
    다른 클래스에서 이 속성이나 메서드를 구현하게 된다.

    ```typescript
    abstract class 클래스 이름{
        abstract 속성 이름: 속성 타입
        abstract 메서드 이름() {}
    }

    ```

## 클래스 상속 (Person5.ts 참조)

    객체지향 언어는 부모 클래스를 상속받는 상속 클래스를 만들 수 있는데, 타입스크립트는 extends키워드를 사용하여 상속 클래스를 만든다.

    ```typescript
    class 상속 클래스 extends 부모 클래스 {...}
    ```

## static 속성 (static.ts 참조)

    타입스크립트 클래스에서 static을 사용하여 정적인 속성을 가질 수 있다.

    ```typescript
    class 클래스 이름{
        static 정적 속성 이름: 속성 타입
    }

    // 예시
    class A{
        static initValue = 1
    }

    let initVal = A.initValue // 1
    // 클래스 이름.정적 속성 이름    - 점 표기법

    ```
