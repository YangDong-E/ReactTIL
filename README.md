# ReactTIL

잠시 다른 하고싶은 일을 찾아서 손에서 놓고 있던 코딩을 다시 시작하고싶어 도전 및 공부 중..

2023.10.17~23 - 질병 이슈로 인한 push X

# 23.10.23 - dlog Issue(eject로 인한 실패)

express와 axios를 사용하여 서버와 클라이언트의 연동 실패

예상 - 404 에러 발생으로 보아 서버에서 데이터를 못불러오는 상황인듯함

개선사항 - express와 클라이언트의 axios 코드를 다시 천천히 틀린부분이나 보내고 받아오는 부분에서의 문제는 없는지 살펴봐야한다.


# 23.10.23 - react-express

react(서버)와 express(서버)의 연동 성공

진행하며 문제점 및 알게된 사항
- fetch().then((res)) 부분에서의 res.json이 undefined이거나 nativecode 또는 ReadableStream가 lock으로 나왔다.
- 해결한 방법으로는 원래라면 return을 생략해도되는 부분에서 return을 작성을하니 출력이 되었다.
- 해결하기 위해서 구글링과 console.log로 데이터의 흐름을 하나하나 보면서 어느 부분에서 문제점이 발생했는지 찾아보았고, 문제점을 발견하고 해결하기위해 구글링을 하고 점차 좁혀나가서 해결하였다.


# 23.10.26 - react-blog 생성

koa를 사용하여 서버를 만들고 응용하여 블로그를 만드는 공부

velopert님의 책을 보고 작성해보는 연습하는중


# 23.11.17 - redux 세팅

redux세팅을 하던 와중에 설치할때 버전이 달라서 현재는 버전을 5 버전으로 낮춰서 설치하여 에러를 해결하였다.
또한 redux-devtools-extension을 사용할때 import composeWithDevTools가 아닌 import {composeWithDevToolse}로 불러와야한다.
렌더시 babel 경고문이 나왔었는데 `npm install --save-dev @babel/plugin-proposal-private-property-in-object`를 사용하여 경고문을 없애서 해결하였다.
