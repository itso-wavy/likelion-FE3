# 1. 리액트가 뭐지, 왜 쓰지?
리액트: 컴포넌트를 쉽게 생성할 수 해주는 라이브러리
- 페이지 구성 요소를 컴포넌트화 하기 위해
- ReactDOM 객체를 통해서 js에서 html까지 한번에, jsx 문법 이용시 더 쉬움!
- 페이지 새로고침 없는 SPA 구현 가능
- 코드 재사용성

# 2. 터미널 기본 명령어
1. 프로젝트 생성
    > npx create-react-app 프로젝트명
2. 미리보기 띄우기
    > npm start
3. package.js 만들기
    > npm init -y
4. html 파일 만들기
    > npm run bulid

# 3. 어떻게 쓰지? 기본 문법
1. class => className
2. CSS style => style={{속성: '값'}}
3. JS변수 => {변수명} / JS함수 => `<함수명>`
(중괄호 안에서 js 코드 인식 가능하나 중괄호는 또 사용할 수 없기에 함수로 만듦)

# 4. 기타 특징
1. 현업의 트렌드 함수형 컴포넌트 ⇔ 구문법 클래스 문법
2. state: 구조분해할당, 
기본 변수는 재렌더링 불가, 자주 변경되는 변수는 state 사용, 마크업 블럭 전체가 자동 재렌더링되어 html에 반영됨
3. props: 

```html
//index.html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
    </head>

    <body>
        <div id="root"></div>
    </body>
</html>
```
```js
//App.js
function App() {
  return (
    <div className="App">
      <h1>test2</h1>
    </div>
  );
}

export default App;
```
```js
//index.js
import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
```
