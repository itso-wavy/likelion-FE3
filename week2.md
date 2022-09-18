- [9/5 (월)](#95-월)
  - [1. 피드백](#1-피드백)
    - [(1) 더 자주, 빠르고, 꾸준하게](#1-더-자주-빠르고-꾸준하게)
    - [(2) 피드백의 방향](#2-피드백의-방향)
  - [2. HTML(2)](#2-html2)
- [9/6 (화)](#96-화)
  - [1. HTML(3)](#1-html3)
    - [(4) Text-level semantics](#4-text-level-semantics)
  - [2. HTML(4)](#2-html4)
    - [(4) Embedded content](#4-embedded-content)
- [9/7 (수)](#97-수)
  - [1. HTML(5)](#1-html5)
    - [(5) Forms](#5-forms)
    - [(6) Tabular data](#6-tabular-data)
  - [2. CSS: Cascading Style Sheets](#2-css-cascading-style-sheets)
    - [(1) 우선순위](#1-우선순위)
    - [(2) 벤더프리픽스](#2-벤더프리픽스)
- [9/8 (목)](#98-목)
  - [CSS(2)](#css2)
    - [(3) CSS Selector](#3-css-selector)
    - [(4) 박스 모델](#4-박스-모델)
      - [1) 박스의 구성](#1-박스의-구성)
      - [2) 박스의 유형(display):](#2-박스의-유형display)
      - [3) 대체 박스 모델](#3-대체-박스-모델)



# 9/5 (월)
`* 임동준(메이커준) 강사님`

* 2주에 한번 스프린트 회고시간에 만나게 됨

## 1. 피드백
### (1) 더 자주, 빠르고, 꾸준하게
* 치면착색제 예시
* 멋사에서는 내내 타인과 피드백을 주고받을 수 있는 환경이 마련되어 있음
* 회고 시간을 통해 얻을 수 있는 것: 아는 즐거움 ➩ 변화하는 즐거움

### (2) 피드백의 방향
* 전체 교육 과정을 마무리 했을 때 나는 어떤 상태이면 만족할까?
  * 우아한형제들 지원서
  > 좋은 개발자의 덕목 3가지와 그 이유를 작성해주세요. 라는 질문에 내가 답한 덕목을 갖추고 있지 않다면 떨어지겠다고 생각, 부족함 채우려고 활동하다보니 나의 커리어가 그 방향으로 맞춰지더라.

* 멋사 마무리에 내가 이루고 싶은 목표를 구체적인 장면으로 떠올리면서 작성하기, 그리고 역량과 목표를 수정하는 시간

---

`* 한재현 강사님`

## 2. HTML(2)
* 강사님 구현 포인트 
  * 헤딩 태그=구조화
  * 섹션을 쓸 때는 형제 섹션이 필요함
  * dt, dd는 의미가 추가된 리스트와 같은 역할
  * 한줄 복사

> * [TED Tim Berners-Lee: Linked Data](https://www.youtube.com/watch?v=OM6XIICm_qo&t=332s)<br>
> * [검색엔진 최적화(SEO) 기본 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko&visit_id=637979483710948537-736098899&rd=1)


---
# 9/6 (화)
`* 한재현 강사님`

## 1. HTML(3)
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

---

`이호준 강사님` 

## 2. HTML(4)
### (4) Embedded content
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


---
# 9/7 (수)
`* 이호준 강사님`

## 1. HTML(5)
`<vedio>`

* 유투브 영상 임베디드의 문제
  * 순간 트래픽 부하분산
  * 월간 트래픽(비용)
   
* 코덱과 포맷
  * 코덱: 원본영상의 압축물
  * 포맷: 코덱을 담아 플레이어에 전달하는 컨테이너
> 바이트 단위: 킬로-메가-기가-테라-페타

> 속도조절: document.getElementsByTagName("video")[0].playbackRate = 2.5;

### (5) Forms
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

### (6) Tabular data

`<table>`

![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcca0db6d-558a-4310-88f3-791691fbc1ce%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.59.33.png?table=block&id=f360dc23-1a98-4262-addc-0e13323107d3&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1580&userId=&cache=v2)

`<caption>`: table 요소의 첫번째 자식

`<thead>`, `<tbody>`, `<tfoot>`: 테이블의 내용이 많을 때 머리글, 본문, 바닥글로 구역화, thead가 없으면 tbody에 정보가 들어가지 않음

`<tr>`, `<td>`/`<th>`: th 태그는 행, 열의 머리말을 가운데 정렬로 굵게 표시함
* scope: row/col, 스크린 리더가 읽을 방향 지정

`<colgroup>`, `<col>`: 한 열에 공통적인 스타일을 줌
> border-collapse: collapse;

 colspan, rowspan: 셀합치기 

 ## 2. CSS: Cascading Style Sheets
: 우선순위에 따라 적용되는 스타일 언어
```css
Selector(선택자) { /* Declaration Block(선언블록) */
    Property(속성): Value(값);
}
```

### (1) 우선순위
* 내부, 외부 중 작성순서에 따라 적용
  * 내부 CSS
  * 외부 CSS: 공통 CSS+커스텀 CSS
  * 인라인 CSS(비권장)

* 다중 스타일시트(엣룰): @charset, @import, @font-face, @keyframes, @media, @supports
> link header.css ➩ @import "menu.css"
### (2) 벤더프리픽스
> 오토프리픽서 CSS: https://autoprefixer.github.io/


---
# 9/8 (목)
`* 이호준 강사님`
## CSS(2)

> 웹디자인대회 4개, 최종프로젝트 **마켓(MPA < 리액트 < SPA바닐라) 언급
  
### (3) CSS Selector
* 전체 선택자, 타입 선택자, 아이디 선택자, 클래스 선택자
* 선택자 우선순위: 후자 우선의 원칙, 구체성(명시도)의 원칙, 중요성의 원칙
  * Specificity(구체성): 타입/가상요소(::) < class/가상클래스(:)/속성 < id < inline-style, 전체선택자는 무시됨
* [셀렉터 심화]()

### (4) 박스 모델
#### 1) 박스의 구성
   * 콘텐츠(content): width X height
   * 패딩, 보더, 마진
   > 참고 [border-radius](css/week2@border-radius.html)
   * **마진 병합**(겹침) 현상
     * 정의: 블록 요소 사이의 상하단 마진이 맞닿으면 하나로 병합되는 현상(두 마진의 크기가 다르면 큰 쪽으로 병합)
     * 대상: 형제/부모자식/빈 블록 자기자신의 상하단 마진
     * 블럭요소의 마진이 0이어도 발생함
     * CSS 제작자의 디자인적 의도가 담긴 것으로 문제가 아님, 그럼에도 불구하고...
        1. <span style="color: palevioletred; margin-left: 30px;">부모요소에 border/padding: 1px transparent ➩ 눈에 보임</span>
        2. <span style="color: palevioletred; margin-left: 30px;">display: inline-block ➩ 근본적 해결책이 아님</span>
        3. <span style="color: palevioletred; margin-left: 30px;">부모요소에 display: flow-root ➩ IE 지원 불가</span>
        4. <span style="color: palevioletred; margin-left: 30px;">부모요소에 overflow: hidden ➩ 그림자 등이 잘려보일 수 있음</span>
#### 2) 박스의 유형(display): 
   * ① 블록
     * 가용 너비의 가로 100%를 사용, 사용하지 못하는 공간은 마진으로 채움
     * width, height로 컨트롤
     * 패딩, 보더, 마진이 다른 요소를 밀어냄
   * ② 인라인
     * 컨텐츠 박스만큼의 너비만 가지므로 한 줄에 다음 요소가 올 수 있음
     * width, height로 컨트롤 불가
     * 패딩, 보더, 좌우마진을 가짐 / **이들의 상하값은 다른 요소를 밀어내지 않음**
   * ③ 인라인-블록
     * 블록처럼 width, height, 패딩, 보더, 마진 지정 가능
     * 가로를 다 차지하지 않으므로 한 줄에 다음 요소가 올 수 있음
#### 3) 대체 박스 모델
`box-sizing: border-box`
