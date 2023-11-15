// const Router = require('koa-router');
// const postsCtrl = require('./posts.ctrl');
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

// 리팩토링 후

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
posts.use('/:id', postsCtrl.getPostById, post.routes());

// 리팩토링 전
// posts.get('/', postsCtrl.list);
// posts.post('/', postsCtrl.write);
// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);

// // put은 Request Body로 받은 값이 id를 제외한 모든 값을 대체
// // posts.put('/:id', postsCtrl.replace);

// // patch는 기존 값은 유지하면서 새 값을 덮어 씌운다.
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

// // 문자열이 아닌 JSON 객체를 반환하도록 설정
// const printInfo = (ctx) => {
//     ctx.body = {
//         method: ctx.method,
//         path: ctx.path,
//         params: ctx.params,
//     };
// };

// // posts 라우트에 여러 종류의 라우트를 설정한 후 printInfo 함수를 호출하도록 설정
// // 문자열이 아닌 JSON 객체를 반환하도록 설정
// // posts.메서드('경로',파라미터)
// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/:id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);

// module.exports = posts;

export default posts;
