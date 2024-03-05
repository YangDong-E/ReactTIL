## F-바운드 다형성

# 실습 프로젝트 구성 순서

1. npm init --y
2. npm i -D typescript ts-node @types/node
3. mkdir -p src/test
4. mkdir src/classes
5. mkdir src/interfaces

# this 타입과 F-바운드 다형성

타입스크립트에서 this 키워드는 타입으로도 사용된다.
this가 타입으로 사용되면 객체지향 언어에서 의미하는 다형성 효과가 나는데, 일반적인 다형성과 구분하기 위해서
this 타입으로 인한 다형성을 'F-바운드 다형성'이라고 한다.

F-바운드 타입이란, 자신을 구현하거나 상속하는 서브타입을포함하는 타입을 말한다.

# 디렉터리별 의미

interfaces 디렉터리 - 타입들을 지정하는 디렉터리

classes - 인터페이스를 구현하는 클래스를 구현하는 디렉터리

test - 만들어진 클래스를 테스트하는 코드를 작성하는 디렉터리
