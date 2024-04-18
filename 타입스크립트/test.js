"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test.ts
var express_1 = require("express");
var body_parser_1 = require("body-parser"); // body-parser import 추가
var app = (0, express_1.default)();
var port = 3000;
// body-parser 미들웨어 사용
app.use(body_parser_1.default.urlencoded({ extended: true }));
// 루트 경로에 대한 GET 요청 처리
app.get('/', function (req, res) {
    res.send("\n        <form action=\"/showId\" method=\"post\">\n            <label for=\"id\">\uC544\uC774\uB514:</label><br>\n            <input type=\"text\" id=\"id\" name=\"id\"><br>\n            <button type=\"submit\">\uC81C\uCD9C</button>\n        </form>\n    ");
});
// /showId 경로에 대한 POST 요청 처리
app.post('/showId', function (req, res) {
    // POST 요청에서 아이디 값을 가져옴
    var id = req.body.id;
    // 받은 아이디를 다른 페이지에 출력
    res.send("\uC785\uB825\uD55C \uC544\uC774\uB514\uB294: ".concat(id));
});
// 서버 시작
app.listen(port, function () {
    console.log("\uC11C\uBC84\uAC00 http://localhost:".concat(port, " \uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4."));
});
