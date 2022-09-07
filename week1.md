**INDEX**
- [8/29(월)](#829월)
- [8/30(화)](#830화)
  - [1. 마크다운 문법](#1-마크다운-문법)
  - [2. VSCode 설정과 단축키](#2-vscode-설정과-단축키)
    - [(1) 초기 설정](#1-초기-설정)
    - [(2) 단축키](#2-단축키)
  - [3. Emmet](#3-emmet)
  - [4. 첫 GitHub](#4-첫-github)
- [8/31(수)](#831수)
  - [1. HTML](#1-html)
    - [(1) Document element & metadata](#1-document-element--metadata)
    - [(2) Sections(섹셔닝 요소)](#2-sections섹셔닝-요소)
    - [(3) Grouping content](#3-grouping-content)



# 8/29(월)

* BIGPLAN 글로 표현하고 조별 발표(8조)
  <!-- 김주열 팀장, 이윤구-이준엽-제지해-방선아-이수빈-김소영-백승지 -->
  
* 테킷 강의 <일단 만드는 HTML/CSS> 수강 


---
# 8/30(화) 

`이호준 강사님`

* 강사님과의 첫인사
* 마크다운 문법, VSCode, Emmet 기본 설정과 단축키 숙지 / GitHub 첫 커밋

## 1. 마크다운 문법

[개별 문서](https://github.com/itso-wavy/babyLion/blob/main/week1@markdown_grammar.md) 참고

## 2. VSCode 설정과 단축키

### (1) 초기 설정

* 윈도우 폴더 내에서 바로 VSCode 실행하는 법: 
  
  shift + 마우스R 클릭 ➩ powerShell 창 열기 ➩ `code .` (중간 띄어쓰기 유의)

* VSCode 자동 줄바꿈 기능:
  
  설정(`Ctrl + ,`)에서 wrap 검색 ➩ Editor: Word Wrap _**on**_

* HTML 한국어 양식 스니펫 만들기: htmlko + Tab
 
### (2) 단축키
 
* 설정: `Ctrl + ,` 
  
  (Settings.json file open으로 좀 더 다양한 커스터마이징 가능)

* 모든 단축키: `Ctrl + K + S` 

* 사이드 바: `Ctrl + B`

* 터미널: `Ctrl + ` `

* Command palette: `F1`
  

* 프로젝트 검색: `Ctrl + P`

<hr style="font-size: 1px; width: 500px;">

* 윈도우 창 분할: `윈도우키 + 방향키`
  
* VSCode 탭 분할: `Ctrl + Alt + 방향키`

* 새 탭: `Ctrl + \`
 
* 확장프로그램 htmlTagWrap: `Alt + W`, 기본 p 태그로 둘러쌈

* 라인 지우기: `Shift + del`
  
<hr style="font-size: 1px; width: 500px;">

* Ctrl은 시점 변경, Shift는 선택, Alt는 수정

* `Ctrl + Shift` = Shift

* `Ctrl + Alt`: 다중커서

* `Shift + Alt`: 복사

* `Ctrl + Shift + Alt`: 다중커서복사

## 3. Emmet

[개별 문서](https://github.com/itso-wavy/babyLion/blob/main/week1@emmet.md) 참고

## 4. 첫 GitHub

* GUI로 첫 커밋. 새 폴더, 파일 생성/편집/삭제
  
* .(dot) 눌러서 웹 편집기 실행, commit
  
* pages 생성. 주소는 항상 index.html로 열림


---
# 8/31(수)

`한재현 강사님`

* 아이스 브레이킹: 강사님 학생시절 일화, 스터디에서 남들에게 가르치다보니 여러번의 부캠 수강 후에도 개념 오류가 있었단 걸 깨닳으심
* 추천도서: 
  * HTML & CSS - 웹사이트 개발과 디자인 기초
  * 누구나 쉽게 배우는 자바스크립트


## 1. HTML

HTML: 웹문서 마크업 언어, 웹표준은 HTML Living Standard

### (1) Document element & metadata

  `<!DOCTYPE html>`

  `<html>`

  `<head>`

  `<title>`

  `<link>`

  `<meta>`
  - charset
  - name="author": 문서 작성자
  - name="description": 설명, 검색어
  - name="viewport": 모바일 화면 사이즈 값 설정
  - http-equiv="X-UA-Compatible”: IE브라우저 페이지 랜더링 형식 지정

### (2) Sections(섹셔닝 요소)

  `<body>`

  `<header>`

  **`<h1> … <h6>`**: <span style="color: palevioletred">
  __헤딩__, 페이지 계층 구조의 기준, 익명 영역(anonymous section)을 생성</span>. 다음 헤딩이 나타나기 전까지 해당 구역은 헤딩의 소속.

```html
<hgroup>
<h1>제목</h1>
<h2>소제목</h2>
</hgroup>
```
  `<nav>`

  `<section> + h$`: 연관성 있는 섹션이 2개 이상일 경우 사용. 섹션 내 헤딩에 속하지 않은 구역이 있어선 안 됨

  `<article> + h$`: 독립적, **위젯**

  `<aside>`: 사이드 영역, 각주 혹은 광고

  `<footer>`

  `<address>`

### (3) Grouping content

  `<main>`

  `<div>`: `<header>, <nav>, <article>, <section>`와 같음

  `<p>`: 완결된 문단을 의미하는 시멘틱 태그, p>p 불가

  `<ol> `,  `<ul> `,  `<li>`: ol, ul의 직계 자식 요소로 li 요소만 사용됨

  `<dl>`, `<dt>`, `<dd>`: 정의 리스트, dl도 직계자식으로 dt, dd (+ div)만 가질 수 있음

  `<figure>`, `<figcaption>`: 캡션 달린 이미지

  **`<pre>`**: HTML에 작성한 내용 그대로 화면에 표현함. 주로 컴퓨터 코드 표현시 사용

<pre>
<code>
    console.log('hello');
</code>
</pre>

  ```HTML
    <pre>
    <code>
      console.log('hello');
    </code>
    </pre>
  ```
  `<q>`, `<blockquote>`

  `<hr>`: 주제 변경을 의미하는 시멘틱 태그


> Entity Code: **&amp;**(`&amp;`), **&lt;**(`&lt;`), **&gt;**(`&gt;`)

---