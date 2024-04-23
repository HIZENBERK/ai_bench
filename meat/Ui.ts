import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the menu structure
const menu = [
  {
    text: '원료(지육)관리',
    path: '/raw-material',
    children: [
      { text: '원료(지육)입고', path: '/raw-material/incoming' },
      { text: '원료(지육)조회', path: '/raw-material/inventory' },
    ],
  },
  {
    text: '제품',
    path: '/product',
    children: [
      { text: '제품 등록', path: '/product/register' },
      { text: '제품 조회', path: '/product/inventory' },
    ],
  },
  {
    text: '주문',
    path: '/order',
    children: [
      { text: '주문 등록', path: '/order/register' },
      { text: '작업지시서', path: '/order/work-order' },
      { text: '배송 사고', path: '/order/accident' },
    ],
  },
  {
    text: '결산',
    path: '/settlement',
    children: [
      { text: '매입 명세', path: '/settlement/purchase' },
      { text: '매출 명세', path: '/settlement/sales' },
    ],
  },
  {
    text: '기타',
    path: '/others',
    children: [
      { text: '거래처 추가/삭제', path: '/others/customer' },
      { text: '제품 추가/삭제', path: '/others/product' },
    ],
  },
];

// Generate HTML for the menu recursively
function generateMenuHTML(menuItems: any[]): string {
  let html = '<ul>';
  for (const item of menuItems) {
    html += '<li>';
    html += `<a href="${item.path}">${item.text}</a>`;
    if (item.children && item.children.length > 0) {
      html += '<ul>';
      for (const child of item.children) {
        html += `<li><a href="${child.path}">- ${child.text}</a></li>`;
      }
      html += '</ul>';
    }
    html += '</li>';
  }
  html += '</ul>';
  return html;
}

app.get('/', (req: Request, res: Response) => {
  const menuHTML = generateMenuHTML(menu);
  const pageHTML = `
    <style>
      .menu-container {
        border: 1px solid #000;
        padding: 10px;
        display: inline-block;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      ul ul {
        padding-left: 20px;
      }
      h1 {
        font-size: inherit;
        display: inline-block;
        margin: 0;
      }
      .help-text {
        margin-top: 10px;
        font-style: italic;
      }
    </style>
    <div class="menu-container">
      <h1>메인</h1>
      ${menuHTML}
      <div class="help-text">도움말</div>
    </div>
  `;
  res.send(pageHTML);
});


app.get('/order/register', (req: Request, res: Response) => {
  const menuHTML = generateMenuHTML(menu);
  const formHTML = `
    <div class="form-container">
      <h2>주문 등록</h2>
      <form action="/order/register" method="post">
        <div class="form-fields" style="border: 1px solid #000; padding: 10px;">
          <div>
            <label for="registrationDate" style="width: 120px;">등록일(요일):</label>
            <input type="text" name="registrationDate" id="registrationDate">
            <label for="divider">구분:</label>
            <input type="text" name="divider" id="divider">
          </div>
          <div>
            <label for="customer">주문자:</label>
            <input type="text" name="customer" id="customer">
            <label for="address">주소:</label>
            <input type="text" name="address" id="address">
          </div>
          <div>
            <label for="contact">연락처:</label>
            <input type="text" name="contact" id="contact">
            <label for="registrant" style="margin-top: 10px;">주문등록자:</label>
            <input type="text" name="registrant" id="registrant">
          </div>
        </div>
        <div class="menu-fields" style="border: 1px solid #000; padding: 10px; margin-top: 10px;">
          <div class="menu-item" style="display: flex; align-items: center;">
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="productName" style="margin-right: 10px;">제품명:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="productName" id="productName">
            </div>
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="price" style="margin-right: 10px;">가격:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="price" id="price">
            </div>
          </div>
          <div class="menu-item" style="display: flex; align-items: center;">
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="productName" style="margin-right: 10px;">제품명:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="productName" id="productName">
            </div>
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="price" style="margin-right: 10px;">가격:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="price" id="price">
            </div>
          </div>
          <div class="menu-item" style="display: flex; align-items: center;">
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="productName" style="margin-right: 10px;">제품명:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="productName" id="productName">
            </div>
            <div style="flex: 0 0 120px; text-align: right; margin-right: 10px;"> <!-- 레이블을 담당하는 div -->
              <label for="price" style="margin-right: 10px;">가격:</label>
            </div>
            <div style="flex: 1;"> <!-- 입력란을 담당하는 div -->
              <input type="text" name="price" id="price">
            </div>
          </div>
        </div>
      </form>
    </div>
  `;
  const pageHTML = `
    <style>
      .page-container {
        display: flex;
      }
      .menu-container {
        border: 1px solid #000;
        padding: 10px;
        display: inline-block;
        margin-right: 20px;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      ul ul {
        padding-left: 20px;
      }
      h1 {
        font-size: inherit;
        display: inline-block;
        margin: 0;
      }
      .help-text {
        margin-top: 10px;
        font-style: italic;
      }
      .form-container {
        border: 1px solid #000;
        padding: 10px;
        width: 350px; /* 네모 상자의 너비를 조절합니다 */
      }
      .form-container input {
        display: inline-block; /* 입력란을 한 줄에 표시합니다 */
        margin-bottom: 5px;
      }
      .form-container label {
        display: inline-block;
        width: 120px;
        text-align: right;
        margin-right: 10px;
      }
      .menu-fields {
        vertical-align: top; /* 상단 정렬합니다 */
        margin-top: 10px; /* 간격 조정합니다 */
        margin-left: 20px; /* 등록일과의 간격을 조정합니다 */
      }
      .menu-item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }
      .menu-item label {
        margin-right: 10px;
      }
    </style>
    <div class="page-container">
      <div class="menu-container">
        <h1>메인</h1>
       

        ${menuHTML}
        <div class="help-text">도움말</div>
      </div>
      ${formHTML}
    </div>
  `;
  res.send(pageHTML);
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
