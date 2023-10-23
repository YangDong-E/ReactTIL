// require함수를 사용하여 express 모듈을 불러온다.
const express = require('express');
// app이라는 변수에 express를 담아준다.
// app이라는 변수를 통하여 서버를 관리
const app = express();

// 서버가 가지고있는 주소(포트)를 지정
const PORT = process.env.PORT || 4000;

// 서버를 실행했을 때, 서버 응답을 출력
// 첫번째 인자 '/'는 경로를 나타내는 인자이다.
// rex.send로 서버에 출력
app.get('/', (req, res) => {
    res.send(`Open the Dlog`);
});

app.get('/api/host', (req, res) => {
    res.send({ host: 'Dong' });
});

// listen 메소드를 사용하여 서버를 읽어온다.
app.listen(PORT, () => {
    console.log(`Server : http://localhost:${PORT}/`);
});

// 서버를 실행할때는 반드시 server.js파일이 있는 디렉토리의 경로로 이동하여야한다.
// listen 함수 안에 있는 console이 출력이되면 실행이 된모습
