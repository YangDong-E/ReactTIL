require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import createFakeData from './createFakeData';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to Mongo');
        createFakeData();
    })
    .catch((e) => {
        console.error(e);
    });

// const api = require('./api');
import api from './api';

import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

// 라우터 설정

router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 body Parser 적용
app.use(bodyParser());

app.use(jwtMiddleware);

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

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async (ctx) => {
    // Not Found 이고, 주소가 /api 로 시작하지 않는 경우
    if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
        // index.html 내용을 반환
        await send(ctx, 'index.html', { root: buildDirectory });
    }
});

const port = PORT || 4000;

app.listen(port, () => {
    console.log('Listening to port %d', port);
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
