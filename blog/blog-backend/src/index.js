const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정

router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 body Parser 적용
app.use(bodyParser());

// // 라우터 설정
// router.get('/', (ctx) => {
//     ctx.body = '홈';
// });

// router.get('/about/:name?', (ctx) => {
//     const { name } = ctx.params;
//     // name의 존재 유무에 따라 다른 결과 출력
//     ctx.body = name ? `${name}의 소개` : '소개';
// });

// // 라우트를 작성하면서 특정 경로에 미들웨어를 등록할땐 ctx => {} 처럼 두 번째 인자에 함수를 선언해서 등록할 수 있다.
// router.get('/posts', (ctx) => {
//     const { id } = ctx.query;
//     // id의 존재 유무에 따라 다른 결과 출력
//     ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
// app.use(async (ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if (ctx.query.authorized !== '1') {
//         ctx.status = 401; // Unauthorized
//         return;
//     }
//     await next();
//     console.log('END'); // next를 주석처리를 하면 다음 미들웨어를 무시한다.
// });

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// });

// // app.use - 미들웨어 함수를 애플리케이션에 등록
// // 첫번째 파라미터 - ctx(Context) 웹 요청과 응답에 관한 정보를 지닌다.
// // 두번째 파라미터 - next 함수를 호출하지않으면 다음 미들웨어를 처리하지않음.
// app.use((ctx) => {
//     ctx.body = 'hello world';
// });
