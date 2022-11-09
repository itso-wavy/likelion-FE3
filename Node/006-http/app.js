/* 
006. 기본 모듈 http
공식문서 링크: https://nodejs.org/api/http.html

응답 순서는 writeHead, write, end를 가급적 지켜주세요. 두번 응답을 보낼 수는 없습니다.
 */

const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('server가 구동중입니다.');
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  // res.write('<h1 style="color:black">hello world</h1>');
  // 다크모드 시에는 검은색 배경이 됩니다.
  res.write('hello world');
  res.end();
});

server.listen(8080);
// http://localhost:8080/
