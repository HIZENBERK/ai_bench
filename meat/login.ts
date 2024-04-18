import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Generate HTML for the login form
function generateLoginForm(): string {
  return `
    <form action="/login" method="post">
      <div style="text-align: center;">
        <label for="username" style="display: inline-block; width: 100px; text-align: right;">사번:</label>
        <input type="text" id="username" name="username" style="display: inline-block;"><br><br>
        <label for="password" style="display: inline-block; width: 100px; text-align: right;">비밀번호:</label>
        <input type="password" id="password" name="password" style="display: inline-block;"><br><br>
        <button type="submit">로그인</button>
      </div>
    </form>
  `;
}

// Route handler to display the login form
app.get('/', (req: Request, res: Response) => {
  const loginFormHTML = generateLoginForm();
  const pageHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div>
        <h1>로그인</h1>
        ${loginFormHTML}
      </div>
    </div>
  `;
  res.send(pageHTML);
});

// Route handler for login
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // 여기에 로그인 처리 로직을 추가하세요.
  // 데이터베이스와 연동하여 사용자 정보를 확인하고 성공 또는 실패에 따라 적절한 응답을 전송합니다.
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
