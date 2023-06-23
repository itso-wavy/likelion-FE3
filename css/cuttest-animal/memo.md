1. HTML 을 보여주고
2. 사용자가 어떤 행동을 하면 그 결과를 HTML에 반영합니다.
HTML을 보여주는것은 JSX —> JSX는 HTML과 최대한 유사한 문법으로, 우리가 보여주고 싶은 UI를 리엑트에게 그려달라고 요청할 때 사용합니다.
// 1. import 리액트, 리액트돔 라이브러리

 // 컴포넌트가 무엇인지 그리고 여러 컴포넌트들이 어떻게 서로 작동되게 할 것인지에 대한 정의를 내리는 라이브러리
import React from 'react';

// 컴포넌트를 브라우저에 랜더링하기 위한 라이브러리. 만약 서버사이드 랜더링이 필요하다면 react-dom/server
import { ReactDOM } from 'react-dom/client';

// 굳이 React와 ReactDOM이 분리된 이유는 리액트가 여러 환경에서 작동되길 원했기 때문. ReactDOM은 브라우저 환경에서, ReactNative는 모바일 디바이스 환경에서 각각 역할을 수행합니다.
JSX를 반환하는 함수를 우리는 React 컴포넌트라고 합니다.

중요 포인트 : 
브라우저는 JSX문법을 전혀 이해하지 못합니다. 
<h1>Hi there!</h1> === React.createElement("h1", null, "Hi there!");

React는 babel 을 이용해 JSX를 JS로 트랜스파일링합니다.

Npm start 명령어를 통해 리엑트는

1. 바벨을 이용해 JSX 를 JS로 변경합니다.
2. 웹팩을 이용해 파일들을 번들링합니다.
3. 브라우저는 번들링된 파일을 읽어서 처리합니다.

6
[오후 7:46]
JSX안에 변수 값 혹은 표현식을 나타내고 싶다면 중괄호를 사용할것

function App() {

    const message = "Hi there!";

    // return <h1>{message}</h1>

    return <h1>{message ? 'hello there!' : 'good bye'}</h1>

}

단, 중괄호에 넣어 표현할 수 있는 데이터는 문자열과 숫자형 데이터만 가능합니다. Boolean, array, object, undefined, null 등의 타입들은 리엑트가 어떻게 표현해야할지 모릅니다.

JSX 안에서 속성들은 HTML 프로퍼티로 표현하지 않습니다. Props 입니다. 특히 HTML 속성중에 두 가지 단어가 결합된것들은 JSX에서 카멜케이스로 표현합니다.

// Props System
  // 1. 부모에서 자식으로 전달하는 데이터를 의미합니다.
  // 2. 자식들마다 다른 데이터를 설정하는것이 가능하다.
  // 3. 부모에서 자식 방향으로만 전달이 가능하다. 그 역방향은 불가능하다.

  // Props 의 사용법
  // 1. JSX에 속성의 형태로 사용합니다.
  // 2. React는 속성을 모아서 하나의 객체로 만듭니다.
  // 3. Props 를 전달받는 자식 컴포넌트는 함수의 첫번째 인자로 Props를 전달받습니다.
[오후 8:15]
  <h1>World Most Cuttest Animals</h1>
      <Card title="랫서판다" text="랫서판다는 판다보다 작다는 의미에서 lesser panda 라고 이름이 불립니다." />
      <Card title="사막여우" text="열을 배출하기 위한 널찍한 귀가 특징입니다." />
      <Card title="북극여우" text="여름에는 또리와 다리는 갈색으로 털갈이를 합니다." />


https://tailwindcss.com/docs/guides/create-react-app
Install Tailwind CSS with Create React App - Tailwind CSS
Setting up Tailwind CSS in a Create React App project.

[오후 8:24]
https://v1.tailwindcss.com/components/cards
Cards - Tailwind CSS
Examples of building card components with Tailwind CSS.
[오후 8:25]
npm install -D tailwindcss postcss autoprefixer
[오후 8:26]
npx tailwindcss init -p

<figure className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imgUrl} alt="" className="w-full" />
            <figcaption className="px-6 py-4">
                <strong className="font-bold text-xl mb-2">{title}</strong>
                <p className="text-gray-700 text-base">{text}</p>
            </figcaption>
        </figure>

<figure className="w-1/3 max-w-sm rounded overflow-hidden shadow-lg px-2">
            <img src={imgUrl} alt="" className="w-full object-cover object-top h-48" />
            <figcaption className="px-6 py-4">
                <strong className="font-bold text-xl mb-2">{title}</strong>
                <p className="text-gray-700 text-base">{text}</p>
            </figcaption>
        </figure>



        1. 일반 CSS : css 파일을 만들고 컴포넌트에 import. —> 클래스네이밍이 겹칠 위험이 있음
2. 모듈 CSS : module.css 만들고 컴포넌트에 import  —> 클래스 네이밍을 겹치지 않게 만들어줌


npm i styled-components



1. JS 안에 CSS 문법을 작성할 수 있어 편리. 
2. CSS 스타일의 내용을 즉각적으로 판단가능. 
3. 클래스 네이밍 난독화 => 클래스 네이밍을 겹치지 않게 만들어줌
4. CSS 파일의 위치 제거
