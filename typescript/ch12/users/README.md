## 진행하며 알게된 점

1. JSX 코드가 있는 파일은 반드시 첫 줄에 React라는 심벌을 import문으로 불러오는 코드가 있어야 한다.

2. JSX 코드는 아무 곳에서나 사용할 수 없고, 리액트가 컴포넌트 라고 부르는 함수의 반환값으로만 사용가능

3. 보통 JSX 코드는 컴파일러를 혼란스럽게 하지 않도록 소괄호 기호()로 감싸준다.

4. 서버에서 가져온 데이터값은 컴포넌트에서 사용할 수 없고 콜백 함수 내부에서만 사용할 수 있다.

5. 리액트에서는 이 문제를 해결할 수 있도록 useState 함수를 제공한다.

6. useState 함수는 배열에 적용한 비구조화 할당 구문을 사용해 데이터를 변경할 수 있는 함수를 얻게 해준다.

7. useEffect라는 함수를 사용하여 웹 브라우저에 의해 새로 고침 될때마다 호출되는 것을 방지하며 웹 브라우저 화면은 바뀌지 않지만, 컴포넌트가 처음 그려질 때(렌더링될 때) 딱 한번만 실행되게 한다.

8. 제일 최근 버전의 부트스트랩을 사용했을때는 예전버전 부트스트랩에서 적용이 안되는 css 코드가 있어서 크기가 잘못 적용이 되어 예전 부트스트랩 버전을 사용하여 오류를 해결함