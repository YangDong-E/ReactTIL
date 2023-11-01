import Post from '../../models/post';

/*
 POST /api/posts
    {
        title: '제목',
        body: '내용',
        tags: ['태그1','태그2']
    },
];
*/
export const write = async (ctx) => {
    const { title, body, tags } = ctx.request.body;
    // 포스트의 인스턴스를 만들때는 new 키워드를 사용
    // 그 후 생성자 함수의 파라미터에 정보를 지닌 객체를 넣는다.
    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        // save() 함수를 사용하여 데이터베이스에 저장
        // 함수의 반환값은 Promise 이므로, async/await로 데이터베이스 저장 요청이 완료될때까지 awiat를 사용하여 대기할수있다.
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/posts
*/
export const list = async (ctx) => {
    try {
        // find()함수를 호출한 후에는 exec()를 붙여주어야 서버에 쿼리요청을 할 수 있다.
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/posts/:id
*/
export const read = async (ctx) => {
    const { id } = ctx.params;
    try {
        // findById() 함수를 사용하여 특정 id를 가진 데이터를 조회할수있다.
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404; // Not Found
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

// 데이터를 삭제하는 함수 ( remove(): 특정 조건을 만족하는 데이터를 모두 삭제, findByIdAndRemove(): id를 찾아서 삭제, findOneAndRemove(): 특정 조건을 만족하는 데이터 하나를 찾아서 삭제)
/*
 DELETE /api/posts/:id
 */
export const remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204; // No Content (성공했지만 응답할 데이터가 없음)
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
 PATCH /api/posts/:id
 {
    title: '수정',
    body: '수정 내용',
    tags: ['수정','태그']
 }
 */

export const update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, // 이 값을 설정하면 업데이트된 데이터를 반환
            // false일 때는 업데이트되기 전의 데이터를 반환
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

// 기존 로직

// let postId = 1; // id의 초깃값

// // posts 배열 초기 데이터

// const posts = [
//     {
//         id: 1,
//         title: '제목',
//         body: '내용',
//     },
// ];

// //  컨트롤러를 만들면서 exports.이름 = {} 형식으로 함수를 내보냄
// //  불러올때는 const 모듈이름 = require('파일이름')
// //  모듈이름.이름(); 으로 사용할 수 있다.

// /* 포스트 작성
// POST /api/posts
// { title, body }
// */

// export const write = (ctx) => {
//     // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
//     const { title, body } = ctx.request.body;
//     postId += 1; // 기존 postId 값에 1을 더한다.
//     const post = { id: postId, title, body };
//     posts.push(post);
//     ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
// */

// export const list = (ctx) => {
//     ctx.body = posts;
// };

// /* 특정 포스트 조회
// GET /api/posts/:id
// */

// export const read = (ctx) => {
//     const { id } = ctx.params;
//     // 주어진 id 값으로 포스트를 찾는다.
//     // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//     // 비교할 p.id 값을 문자열로 변경해야함
//     const post = posts.find((p) => p.id.toString() === id);
//     // 포스트가 없으면 오류를 반환
//     if (!post) {
//         ctx.status = 404;
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.',
//         };
//         return;
//     }
//     ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
// */

// export const remove = (ctx) => {
//     const { id } = ctx.params;
//     // 해당 id를 가진 post가 몇 번째인지 확인한다.
//     const index = posts.findIndex((p) => p.id.toString() === id);
//     // 포스트가 없으면 오류를 반환
//     if (index === -1) {
//         ctx.status = 404;
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.',
//         };
//         return;
//     }
//     // index번째 아이템을 제거한다.
//     posts.splice(index, 1);
//     ctx.status = 204; // No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// { title, body }
// */

// export const replace = (ctx) => {
//     // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째를 교체할 때 사용
//     const { id } = ctx.params;
//     // 해당 id를 가진 post가 몇 번째인지 확인
//     const index = posts.findIndex((p) => p.id.toString() === id);
//     // 포스트가 없으면 오류를 반환
//     if (index === -1) {
//         ctx.status = 404;
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.',
//         };
//         return;
//     }
//     // 전체 객체를 덮어씌움
//     // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듬
//     posts[index] = {
//         id,
//         ...ctx.request.body,
//     };
//     ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
// */
// export const update = (ctx) => {
//     // PATCH 메서드는 주어진 필드만 교체
//     const { id } = ctx.params;
//     // 해당 id를 가진 post가 몇 번째인지 확인
//     const index = posts.findIndex((p) => p.id.toString() === id);
//     // 포스트가 없으면 오류를 반환
//     if (index === -1) {
//         ctx.status = 404;
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.',
//         };
//         return;
//     }
//     // 기존 값에 정보를 덮어 씌움
//     posts[index] = {
//         ...posts[index],
//         ...ctx.request.body,
//     };
//     ctx.body = posts[index];
// };
