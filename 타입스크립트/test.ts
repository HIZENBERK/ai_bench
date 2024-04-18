// test.ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req: Request, res: Response) => {
    res.send(`
        <form action="/showId" method="post">
            <label for="id">아이디:</label><br>
            <input type="text" id="id" name="id"><br>
            <button type="submit">제출</button>
        </form>
    `);
});

// /showId 경로에 대한 POST 요청 처리
app.post('/showId', (req: Request, res: Response) => {
    // POST 요청에서 아이디 값을 가져옴
    const id = req.body.id;

    // 받은 아이디를 다른 페이지에 출력
    res.send(`입력한 아이디는: ${id}`);
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
