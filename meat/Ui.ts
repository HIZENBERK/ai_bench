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

// Route handler to display the menu
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
