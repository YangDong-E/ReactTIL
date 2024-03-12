## Validation 모나드 이해와 구현

# Validation 모나드?

데이터 유무에 따라 코드가 적절하게 동작하게 하는 것이 Maybe 모나드 였다면, 데이터는 있는데 그 데이터가 유효한지를 판단하는 용도로 설계된 모나드가 Validation이다.

Validation 모나드는 판타지랜드의 어플라이 규격에 의존해 동작한다.

Validation 클래스는 Maybe와 비슷하게 Success와 Failure 두 가지 모나드로 구성된다.

# Validation 클래스 구조

Validation 클래스는 Success와 Failure 두 가지 모나드로 구성되는데, Success와 Failure는 내부적으로 현재 데이터의 유효성 검증 상태가 성공인지 실패인지를 판단해 동작한다.

# Success 모나드 구현

Success 모나드는 IChain 형태로는 동작하지 않으므로 Ifunctor와 IApply, Iapplicative만 구현한다.

Success 클래스의 value는 현재 함수이다.

# Failure 모나드 구현

Failure 모나드는 최종적으로 실패한 원인을 문자열 배열로 저장한다.

# 비밀번호 검증 기능 구현 (추후 회원가입 및 로그인 구현할 때 필요할 기능)

비밀번호를 검증한다는 뜻은 객체에 password라는 속성이 있어야하고, 이 속성에 string 타입의 값이 들어있어야 한다.

# 이메일 주소 검증 기능 구현 (추후 회원가입 및 로그인 구현할 때 필요할 기능)

이메일 주소처럼 어떤 일정한 패턴이 있을 때는 "정규식"을 사용해 유효성을 판별한다.
