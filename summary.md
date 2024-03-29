# PROCESS

0. (기획자) 기획

1. (백엔드) URL 구조

```
   www.hojun.com/
   www.hojun.com/a/
   www.hojun.com/b/
   www.hojun.com/c/
```

2. (백엔드, DBA) model 설계

```
  게시판

  - 게시물 제목
  - 게시물 내용
  - 사진
    ....
```

3. (디자이너) 디자인(3번이 아니라 기획과 동시 진행될 수도 있습니다.)
4. (프론트엔드) templates 작성
5. (프론트엔드, 백엔드) model 설계한 것과 templates 연동
6. URL 연결

---

# HTML

## 1. HTML이란?

웹에서 문서를 표현하기 위한 방법

## 2. HTML 표준

**HTML living standard**(https://html.spec.whatwg.org/multipage/)

> (리빙스탠다드 안에 MDN 문서가 같이 있으므로 MDN를 봐도 됨)

## 3.HTML 요소

- 시작태그(start tag, opening tag)+종료태그(end tag, closing tag)
- 빈태그(void tag, empty tag)

## 4. The elements of HTML

### The document element

- html element

### Document metadata

- head
- title
- base
- link
- meta
  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  - https://ogp.me/
- style

### Sections

- body
- article
  - heading 요소를 꼭 포함해야 합니다.
  - 독립해서 볼 수 있다
- section
  - heading 요소를 꼭 포함해야 합니다.
  - 범용적인 묶음 목적으로 사용
- nav
- aside
  - 광고, 위젯 등 콘텐츠와 연관성이 떨어지는 콘텐츠 집합
- h1, h2, h3, h4, h5, h6
- hgroup
  - 문서 구획을 할 때 2차 제목 연결
  - 주의 사항 : hgroup은 이론적으로만 유효(MDN 문서 참고 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/hgroup)
- header

  - 콘텐츠의 시작 부분을 나타내는 요소(구역의 제목을 포함하는 용도로 많이 사용합니다.)

  * h1 > a > img (다음)
  * h1 > a (네이버)
  * h1(screen out) + img

- footer
  - 작성자 정보, 저작권, 관련된 링크 등의 내용을 담는 구획
- address
  - 주소 정보 등을 담습니다.

### Grouping content

- p
- hr
  - 브라우저마다 보여지는 화면이 달라서 은행권 같은 곳에서는 사용을 지양합니다.
  - border나 이미지 사용합니다.
- pre
  - html이 공백 병합이 되는데 공백을 병합하고 싶지 않을 때 사용
- blockquote
  - 인용블록
  - 참고 : q는 인용구(문장 안에 사용)
- ol
  - type이 있습니다. i, I, 1, a, A
- ul
  - 메뉴로 많이 사용합니다.
- menu
- li
- **dl/dt/dd**
  - dl: 정의 목록
  - dt: 정의할 용어
  - dd: 용어 설명
    - 보통 dl > div > dt > dd
    - json 파일의 key와 value의 쌍을 읽어올 때에도 사용

* figure/figcaption
  - 이미지와 함께 콘텐츠의 캡션이 연결되도록 사용

```html
<figure>
  <img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리" />
  <figcaption>관심 받고싶어하는 아기</figcaption>
</figure>
```

- main
  - 주요 콘텐츠가 담겨져 있는 곳
  - IE 에서는 지원하지 않는 비교적 최근에 등장한 요소
- div
  - 최후의 수단으로 활용. 이상과 현실의 괴리가 있을 수 있습니다.

### Text-level semantics

- a
  - a 태그 내부에 block 요소 삽입 가능(HTML 5부터)
  - html 문법상 sections, grouping content 요소들은 텍스트 레벨 요소의 자식으로 사용되지 않지만, 앵커 태그만 예외적으로 sections, grouping content 요소를 자식으로 하는것이 허용됩니다.
  - 사용자와 인터렉션이 가능한 요소를 자식(X)
  - a > a(X)
  - a > button(X)
- em
  - 스크린리더가 강조해서 읽습니다.
  - 강조의 의미가 있습니다.
- strong
  - 스크린리더가 강조해서 읽고
  - strong 중첩해서 의미를 더욱 강조할 수도 있습니다.
- small
- s
- cite
- q
- dfn
  - 현재 문맥에서 정의하고 있는 용어
- abbr
  - 준말
- ruby
- rt
- rp
- data
- time
- code
- var
- samp
- kbd
- sub and sup

```html
<p>H<sub>2</sub>0</p>
<p>x<sup>2</sup>=4</p>
```

- i
  - 기울임 글꼴
- b
  - 글씨 굵게
- u
- mark
- bdi
- dbo
- span
  - Where phrasing content is expected.
  - phrasing content : Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level.
- br
  - 줄바꿈
- wbr
  - 줄바꿈(텍스트 박스에서 한 줄로 모두 표시가 안될 때에만)

### Embedded content

- picture
  - 각기 다른 디스플레이 조건에 맞는 이미지를 보여주는 요소
- source
- img
  - **alt 같은 경우 스크린리더가 어떻게 읽는지 파악하고 있으셔야 합니다.**
    - alt가 없는 경우: 파일명을 읽음
    - alt가 비어있는 경우: 읽지 않고 넘어감
- iframe
  - 사용하실 때에 보안 권고사항을 준수해주세요.(개발 요구사항이나 회사 코딩 컨벤션 참고)
- embed
- video
- audio
- track
- map

```html
<div class="intro_img">
  <img src="images/ceo.png" alt="ceo" usemap="#secret" />
  <map name="secret">
    <area
      href="./jejuoncoding.html"
      target="_blank"
      alt="jejucoding"
      shape="rect"
      coords="500, 300, 750, 600"
    />
  </map>
  <div class="intro_saying">"디딤돌, 전환점이 되어 드리겠습니다."</div>
</div>
```

- area

### Tabular data

- table

```html
<table>
  <caption>
    제목이나 설명(사용을 권고합니다.)
  </caption>
  <colgroup>
    <!-- 한 열에 공통적인 스타일 -->
    <col class="구분" />
    <col class="이름" />
    <col class="판매량" />
  </colgroup>
  <thead>
    <tr>
      <th>구분</th>
      <th>이름</th>
      <th>판매량</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>해리포터</td>
      <td>100</td>
    </tr>
    <!-- ...생략... -->
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">총 판매량</td>
      <td>600</td>
    </tr>
  </tfoot>
</table>
```

- caption
- colgroup
- col
- tbody
- thead
- tfoot
- tr
- td
- th

### Forms

- form
  - **GET/POST**

```html
<!-- submit하면 test.html?아이디=hello&패스워드=world 의 형태로 들어가게 됨.
    GET: URL로 데이터를 전달할 때 사용
        * file같은 큰 파일 X
        * id와 pw 같은 민감 데이터 X
    POST: 패킷 안에 데이터를 넣어 전달할 때 사용 
        * file같은 큰 파일 O
        * id와 pw 같은 민감 데이터 O -->
<form action="./test.html" method="get">
  <label for="id">아이디</label>
  <input type="text" name="아이디" id="id" /><br />
  <label for="pw">패스워드</label>
  <input type="password" name="패스워드" id="pw" /><br />
  <button type="submit">로그인</button>
</form>
```

- label
- input
- button
- select
- datalist
- opstgroup
- option
- textarea
- output
- progress
- meter
- fieldset
- legend
- Interactive elements
- details
- summary
- dialog

### 5. emmet 자동완성

- 자주 사용되는 emmet

```html
h1 h1+h2+p h2*3 h1{hello world}*10 h1#hojun h1.hojun
(div>table>(tr>(td*2))*3)+(footer>p) div#one.c1.c2.c3 ul>li.item$*5
table>(tr#id$>td.class$*6)*3 a{Click} lorem img:z
<!-- lorem*5는 5개의 문장 -->
lorem*5
<!-- lorem5는 5개의 단어 -->
lorem5 [a='value1' b="value2" c=1] a[href='https://www.naver.com']
```

- emmet cheat sheet : `https://docs.emmet.io/cheat-sheet/`

### 6. 참고사항

- **picture/source/img**
  - WEBP(웹피, 구글에서 만든 이미지 포맷)가 용량이 적고, 투명도를 표현할 수 있음
  - jpg : 투명도 표현 X
  - png : 투명도 표현 O
  - source : 해상도에 맞는 이미지 선택
  - source > srcset : 여러 해상도에 대응하는 이미지 셋을 구성할 수 있습니다.
  - source > media : 조건에 알맞는 이미지를 찾는 것
- form
  - checked : 체크상태 표시
  - required : 필수값
  - min : 최솟값
  - max : 최댓값
  - value : 입력된 값
  - placeholder : 입력값 힌트
  - minlength : 최소 길이
  - maxlength : 최대 길이
  - autocomplete : 브라우저 제공 자동완성

---

# CSS

## 1. CSS란?

- Cascading Style Sheets
- CSS3, CSS4 는 없다?! CSS 기능의 단위를 모듈(module)이라고 표현

## 2. CSS 적용

- 인라인, 내부, 외부, 다중(@import)

## 3. reset css

- 에릭 마이어의 reset CSS
- normalize.css (최근 가장 많이 사용되는 reset css)

## 4. 주석 및 벤더프리픽스

- `/* 주석은 이렇게 사용합니다. */`
- 벤더프리픽스 : 벤더(브라우저 제조사)와 프리픽스(접두어)의 합성어
- https://autoprefixer.github.io/ : VSC에도 익스텐션으로 있습니다.
- 회사에서 사용하는 prefixer가 있거나 컨벤션이 정해져 있을 겁니다.

## 5. 선택자 우선순위

- 후자 우선의 원칙 : 동일한 선택자가 연속으로 사용되었을 경우 후자가 우선
- 구체성(명시도)의 원칙 : 한 선택자가 다른 선택자보다 더 구체적(Specificity)으로 작성되었다면 적용

```css
h1.one {
  /* 이걸 적용합니다! */
  color: blue;
}
h1 {
  color: red;
}
```

- 중요성의 원칙
  - inline-style : 1000점
  - id 선택자 : 100점
  - class, 가상클래스, 속성선택자 : 10점
  - 타입, 가상요소 선택자 : 1점
  - 전체선택자 (`*`) : 0점
  - https://specificity.keegan.st/
  - !important

## 6. CSS Box Model

- 우리가 실습한 display

```css
div {
  display: block;
  display: inline;
  display: inline-block;
  display: flex;
  display: grid;
}
```

- block

  - width, height로 조절 가능
  - margin, padding 사용 가능

- inline

  - **width, height 사용 불가**
  - margin, padding 부분 사용 가능 : **패딩과 보더 속성을 사용할 수 있지만 마진 속성은 좌우만** 조절할 수 있습니다.

- inline-block : inline처럼 한 줄에 여러 요소가 존재할 수 있습니다. block처럼 width, height, margin, padding 등 모든 값을 지정할 수 있습니다.

- padding:

  - 2개 : 10px(상하) 15px(좌우)
  - 3개 : 10px(상) 15px(좌우) 20px(아래)
  - 4개 : 10px(12) 15px(3) 20px(6) 25px(9)

* 대체박스모델 : `box-sizing: border-box;`

## 7. CSS declarations

- 단위 : px, em, rem, vw, vh, %
- background-image

```css
.home-header {
background-image: url("apple.jpg");
background-size: cover;
background-position: 50% 50%;
/_ background-position: center center; _/
background-repeat: no-repeat;
}
```

- font

  - font-size
  - font-family
  - font-weight
  - font-style
  - text-align
  - text-decoration
    - ul 태그에서는 `list-style-type: none;` 을 사용하면 앞에 \*가 없어짐
    - a 태그에서 `text-decoration: none;` 이렇게 사용하면 밑줄이 없어짐

* color

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /*
        #000000 ~ #FFFFFF

        bin - 2진수
        01 10
        oct - 8진수
        01234567 10
        hex - 16진수
        0123456789abcdef 10

        R  G  B
        00 00 00

        FF 00 00 - Red

        F00
        */

      :root {
        --main-bg-color: brown;
        --sub-bg-color: #0000ff;
      }
      div {
        width: 100px;
        height: 100px;
      }
      div:nth-child(1) {
        background-color: #red;
      }
      div:nth-child(2) {
        background-color: var(--main-bg-color);
      }
      div:nth-child(3) {
        background-color: #ff0000;
      }
      div:nth-child(4) {
        background-color: #111;
      }
      div:nth-child(5) {
        background-color: #999;
      }
      div:nth-child(6) {
        background-color: RGB(255, 87, 51);
      }
      div:nth-child(7) {
        background-color: rgba(144, 144, 162, 1);
      }
      div:nth-child(8) {
        background-color: hsl(0, 100%, 50%);
      }
      div:nth-child(9) {
        background-color: hsla(0, 100%, 50%, 0.5);
      }
    </style>
  </head>
  <body>
    <div>hello world 1</div>
    <div>hello world 2</div>
    <div>hello world 3</div>
    <div>hello world 4</div>
    <div>hello world 5</div>
    <div>hello world 6</div>
    <div>hello world 7</div>
    <div>hello world 8</div>
    <div>hello world 9</div>
  </body>
</html>
```

- text

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      p {
        /* margin: 100px; */
        line-height: 3;
      }
    </style>
  </head>
  <body>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, beatae
      sint corporis dignissimos magnam sunt? Alias quod provident reprehenderit
      amet. Perspiciatis tenetur rerum vero explicabo atque expedita omnis
      repellat magnam. Nihil tenetur doloribus expedita possimus. Maxime
      voluptatem sint nostrum necessitatibus repellendus earum quasi repudiandae
      perspiciatis alias molestias odit quam, enim id nam quis eveniet,
      voluptate sapiente atque! Mollitia, repellat non!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, beatae
      sint corporis dignissimos magnam sunt? Alias quod provident reprehenderit
      amet. Perspiciatis tenetur rerum vero explicabo atque expedita omnis
      repellat magnam. Nihil tenetur doloribus expedita possimus. Maxime
      voluptatem sint nostrum necessitatibus repellendus earum quasi repudiandae
      perspiciatis alias molestias odit quam, enim id nam quis eveniet,
      voluptate sapiente atque! Mollitia, repellat non!
    </p>
  </body>
</html>
```

- position : static, relative, absolute, fixed, sticky, z-index

- selector
  - h1.one : one 클래스를 가진 h1
  - h1 .one : h1 자손 중에 one 클래스를 가진 요소
  - h1 > .one : h1 자식 중에 one 클래스를 가진 요소
  - h1 + ul : h1 직후에 있는 ul 태그
  - h1 ~ ul : h1 태그 뒤에있는 모든 ul 태그(형제)

* **가상 클래스 선택자**(`:`)

  - .foo:nth-child(3)
  - .foo:nth-child(2n)
  - .foo:hover

* **가상 요소 선택자**(`::`)

  - .foo::before
  - .foo::after

### 8. flex and grid

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.item {
  /* width: 100px; */
  height: 100px;
  border: 1px solid black;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    'hd       hd      hd'
    'sd       main    main'
    'ft       ft      ft';
}
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```
