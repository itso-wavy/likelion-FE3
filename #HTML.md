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
> * [TED Tim Berners-Lee: Linked Data](https://www.youtube.com/watch?v=OM6XIICm_qo&t=332s)<br>
> * [검색엔진 최적화(SEO) 기본 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko&visit_id=637979483710948537-736098899&rd=1)

### (4) Text-level semantics
`<br>`, `<wbr>`: wbr은 단어 중간에서 행바꿈될 수 있는(line-break) 위치를 정의
> * CSS word-break: CJL(중일한어) 속성은 기본적으로 break-all
> * CSS white-space: `p { white-space: pre; }`

`<a href="hyper-reference">`: 예외적으로 a에 sections, grouping content 자식 요소를 둘 수 있음. 하지만 a, btn와 같이 사용자와 인터렉션이 가능한 요소는 둘 수 없음, 외부/내부링크/내PC의 폴더/파일 모두 링크 가능, href가 없으면 브라우저는 올바르지 못한 링크라고 판단함(cf. <span style="color: palevioletred">a는 링크, button은 기능</span>)
- href="#000": 해쉬링크(id), scroll-behavior 프로퍼티로 부드럽게 조작 가능,#만 입력할 시 페이지 최상단으로 이동
- target="_blank": 새 탭에서 열기
- download
- download="a.hwp": 파일명 지정, 확장자 변경 가능
- "tel:" 관련앱으로 전화번호를 열음
- "mailto:" 관련앱으로 메일을 열음

`<i>`, `<em>`: i는 주위와 구분되는 부분 표현, em은 약한 강조의 의미

`<b>`, `<strong>`: strong은 강한 강조의 의미

`<dfn>`: definition, dd내 현재 문맥에서 처음 정의하는 용어 표시

`<abbr>`: abbreviation, 약자
- title="": 툴팁 제공<br>
<dfn><abbr title="World Wide Web">WWW</abbr></dfn>이란...

`<sup>`, `<sub>`: 위/아래 첨자

`<span>`

### (5) Embedded content
`<img src>`
```html
<img src="a.jpg">
<!-- 스크린리더가 'a이미지'라고 읽음 -->
<img src="a.jpg" alt="">
<!-- 스크린리더가 읽지 않음 -->
<img src="a.jpg" alt="사진">
<!-- 스크린리더가 '사진'이라고 읽음 -->
```

> 절대경로: 
  `<img src="C:\Users\paullab\Desktop\FE3\HTML\jeju.jpg">`<br>
  상대경로: 
  `<img src="./jeju.jpg">`

**srcset + sizes**: 반응형 이미지를 위한 어트리뷰트, 화소의 밀도/브라우저/뷰포트에 대응하여 브라우저가 동일 이미지, 다른 크기로 선택하게 함

> **x서술자(화소 밀도)**/w서술자/sizes: 기기 해상도 맞춤, X서술자만 로고 조정시에 쓴다고 하심
```html
<img
width="200px"
srcset="img/logo_1.png 2x,
        img/logo_2.png 3x"
sizes="(min-width: 960px) 250px,
        (min-width: 620px) 150px,
        300px"
src="a.png"
alt="test">
``` 

`<picture>`: html에서 처리하는 미디어쿼리, 크로스브라우징(점진적 향상기법)

```html
<picture>
    <source srcset="babies.webp" type="image/webp">
    <source srcset="babies.avif" type="image/avif">
    <img src="babies.jpeg" alt="귀여운 아기 펭귄들">
</picture>
```

`<iframe>`: 페이지 내 페이지 생성, DBD 공격에 이용될 수 있어 제한되는 경우가 많음

`<vedio>`

* 유투브 영상 임베디드의 문제
  * 순간 트래픽 부하분산
  * 월간 트래픽(비용)
   
* 코덱과 포맷
  * 코덱: 원본영상의 압축물
  * 포맷: 코덱을 담아 플레이어에 전달하는 컨테이너
> 바이트 단위: 킬로-메가-기가-테라-페타

> 속도조절: document.getElementsByTagName("video")[0].playbackRate = 2.5;

### (6) Forms
![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa33523d6-7106-4de0-8510-400291266748%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-06_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.06.41.png?table=block&id=cbcd1dde-2b64-46cc-880b-ff93347155ec&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1600&userId=&cache=v2)

* action: input value를 전송할 페이지<br>
* method: GET/POST

> 웹서버: 정적 파일을 서빙, 로컬/클라우드<br>
> GET: URL로 데이터를 전달할 때 사용, 공유할 때 좋음. 민감 데이터, 큰 데이터 X<br>
> POST: 패킷 안에 데이터를 캡슐화해서 전달할 때 사용. 민감 데이터, 큰 데이터 O
```html
<form action="a.html" method="get">
    <input type="text" name="id">
    <input type="password" name="pw">
</form>
 <!-- id=123, pw=456 입력시 주소창에 ?id=123&pw=456(밸류에이션) -->
```

`<input>`

```html
<input type="text/password/number/button/search/date/time/radio/checkbox/color/range/file/email/url/tel">
```
```html
<form action="" method="">
    <input type="text" name="이름" value="고양이" >
    <input type="hidden" name="이름"  value="10" >
    <button type="submit">제출</button>
</form>
<!-- form에 제출되는 data 수정은 JS 없이 input으로도 해결 가능,
    form에 없는 데이터는 input hidden에 JS로 value 추가하기 -->
```
> number: spinner ui

`<button>`: submit, button, reset

`<select>`: 드롭다운 리스트 박스, 리스트는 `<option value="">` 사용

`<label>`: for="control id"

`<textarea>`: cols, rows
> https://ui.toast.com/tui-editor

`<fieldset>`, `<legend>`

`<datalist>`: input + select, input list = datalist id

```html
<label for="solasystem">원하는 행성을 선택하세요 : </label>
<input type="text" id="solasystem" list="planets" name="planets">
<datalist id="planets">
    <option value="수성">수성</option>
    <option value="금성">금성</option>
    <option value="지구">지구</option>
    <option value="화성">화성</option>
</datalist>
```

### (7) Tabular data

`<table>`

![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcca0db6d-558a-4310-88f3-791691fbc1ce%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.59.33.png?table=block&id=f360dc23-1a98-4262-addc-0e13323107d3&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1580&userId=&cache=v2)

`<caption>`: table 요소의 첫번째 자식

`<thead>`, `<tbody>`, `<tfoot>`: 테이블의 내용이 많을 때 머리글, 본문, 바닥글로 구역화, thead가 없으면 tbody에 정보가 들어가지 않음

`<tr>`, `<td>`/`<th>`: th 태그는 행, 열의 머리말을 가운데 정렬로 굵게 표시함
* scope: row/col, 스크린 리더가 읽을 방향 지정

`<colgroup>`, `<col>`: 한 열에 공통적인 스타일을 줌
> border-collapse: collapse;

 colspan, rowspan: 셀합치기 
