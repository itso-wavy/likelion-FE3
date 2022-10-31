- [9/13(화)](#913화)
  - [1. CSS(3)](#1-css3)
    - [(5) Declarations(선언)](#5-declarations선언)
      - [1) 단위](#1-단위)
      - [2) overflow](#2-overflow)
      - [3) background](#3-background)
      - [4) font](#4-font)
      - [5) opacity](#5-opacity)
      - [6) color](#6-color)
- [9/14(수)](#914수)
  - [1. CSS(4)](#1-css4)
    - [(6) text](#6-text)
      - [1) line-height(줄 높이)](#1-line-height줄-높이)
      - [2) letter-spacing(자간)](#2-letter-spacing자간)
      - [3) text-align(가로정렬)](#3-text-align가로정렬)
      - [4) vertical-align(수직정렬): 인라인 요소 대상](#4-vertical-align수직정렬-인라인-요소-대상)
      - [5) text-indent(들여쓰기)](#5-text-indent들여쓰기)
      - [6) text-decoration](#6-text-decoration)
      - [7) text-overflow](#7-text-overflow)
    - [(7) position(+top/bottom/left/right): 레이아웃①](#7-positiontopbottomleftright-레이아웃)
      - [1) static(초기값)](#1-static초기값)
      - [2) relative](#2-relative)
      - [3) absolute](#3-absolute)
      - [4) fixed](#4-fixed)
      - [5) sticky(IE 지원 불가)](#5-stickyie-지원-불가)
      - [6) z-index](#6-z-index)
    - [(8) float: 레이아웃②](#8-float-레이아웃)
- [9/15(목)](#915목)
  - [1. CSS(5)](#1-css5)
    - [(9) CSS Selector 심화](#9-css-selector-심화)
      - [1) Attribute selectors(속성 선택자): `^`(시작, 반대)/`$`(끝)/`*`(전체)/`~`(전체 중 단어)/`|`(하이픈)](#1-attribute-selectors속성-선택자-시작-반대끝전체전체-중-단어하이픈)
      - [2) Pseudo-classes(가상 클래스)](#2-pseudo-classes가상-클래스)
      - [3) Pseudo-elements(가상 요소)](#3-pseudo-elements가상-요소)
    - [(10) Combinator(결합자)](#10-combinator결합자)
    - [(11) Flex: 레이아웃③](#11-flex-레이아웃)
      - [1) flex-container에 사용하는 속성](#1-flex-container에-사용하는-속성)
      - [2) flex-item에 사용하는 속성](#2-flex-item에-사용하는-속성)
- [9/16(금) 특강데이](#916금-특강데이)
      - [1. 멋사에서 공부한 기억](#1-멋사에서-공부한-기억)
      - [2. 이력서 작성, 면접 팁](#2-이력서-작성-면접-팁)
      - [3. 코딩, 구현 테스트 팁](#3-코딩-구현-테스트-팁)
      - [1. 코드 작성과 학습 조언](#1-코드-작성과-학습-조언)
      - [2. 회사 생활 조언](#2-회사-생활-조언)
  - [*](#)
      - [1. 취준 4종 세트 전략 세우기](#1-취준-4종-세트-전략-세우기)
        - [1. 포트폴리오(*자료 참고* )](#1-포트폴리오자료-참고-)
        - [2. 프로젝트](#2-프로젝트)
        - [3. 이력서(*자료 참고* )](#3-이력서자료-참고-)
        - [4. 면접, 테스트](#4-면접-테스트)
---
# 9/13(화)
`이호준 강사님`

## 1. CSS(3)
* IE 지원 불가: grid, flex, arrow function, for of문 
### (5) Declarations(선언)
#### 1) 단위
* ① 절대 길이 단위: 모니터 크기에 상관없이 똑같이 고정(cm, mm, px)
  * px(picture + element): 뷰포트에서 이미지를 표현하는 가장 작은 단위, 화소가 아니라 인치를 96등분한 것
  
* ② 상대 길이 단위: 변수처럼 수정이 쉬워 유지보수에 용이함, **폰트**에 흔히 적용(em, rem, vw, vh, %)
  * em: 기존 폰트사이즈 기준의 배수, 지정사이즈가 없다면 부모요소로부터의 상속값 기준
  * rem(root em): html 기준으로 배수
    > 멘토님: 기본적으로 rem을 많이 쓰고 텍스트의 비율에 따라 달라져야 할 요소의 경우(버튼 large, medium, small 등) em을 씁니다!
  * %: 기존 콘텐츠값 기준(보더/마진/패딩 제외) 백분율 단위, 설정값이 없다면 상속값 기준, 즉 100%=1em, **부모의 높이가 auto인 경우는 작동하지 않음**
  * vw / vh: 뷰포트를 기준으로 하는 백분율 단위
  * vmin / vmax: 화면 가로세로 중 짧은 길이를 vmin, 긴 길이를 vmax로 하는 백분율 단위

#### 2) overflow
* 속기법: overflow-x, overflow-y
* visible(초기값)/hidden/scroll/hiddenscroll/scroll hidden

> cf. [overflow hidden을 사용한 자식선택자](https://www.google.com/search?q=overflow+hidden%EC%9D%84+%EC%82%AC%EC%9A%A9%ED%95%9C+%EC%9E%90%EC%8B%9D%EC%84%A0%ED%83%9D%EC%9E%90&sourceid=chrome&ie=UTF-8)

#### 3) background
* -image/-size/-color/-repeat/-position + attatchment
  * **-image**<br>
    img 태그: 백엔드와 협업에 필요한 동적 이미지, 시멘틱<br>
    background-image: 정적 이미지, 논시멘틱-스크린리딩X<br>
    img태그와 달리 background-image는 사이즈가 주어지지 않으면 나타나지 않음
  * **-size**: contain/cover/100%

#### 4) font
* font-size/-family/-weight/-style
  * **font-size**: px 값은 폰트의 높이가 됨
* text-transform/-align/-decoration
  * **text-transform**: uppercase/lowercase/capitalize

```html 
<!-- 예시1 -->
<link href = 'http://fonts.googleapis.com/css?family=Open+Sans:400.300' rel='stylesheet' type='text/css'>
<style>
{font-family: 'Open Sans', sans-serif;}
</style>
```

```html
<!-- 예시2 -->
<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400.300);
h1 {font-family: 'Open Sans', sans-serif;}
</style>
```
* @font-face
* font format
> webfont 이식에 관한 추가내용은 [하단 예시](https://paullabworkspace.notion.site/8-CSS-declarations-5b71dd1a23be48c0898178cb7d5816dd#c3ca09d3f0884a20bdb7ed6b3b6417b2) 참고

#### 5) opacity
* 0~1로 투명도 조절, 0.5=50% 
* 투명도가 들어간 요소 안의 내용물도 함께 투명해짐

#### 6) color


---
# 9/14(수)
`한재현 강사님`

## 1. CSS(4)
### (6) text
![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b20dde7-b3bf-4f86-9f70-c35a0a776002%2Ffont.png?table=block&id=4298f7de-5485-4733-a16b-517f175e3dfe&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1610&userId=&cache=v2)

* 전통적 출판물과는 달리 웹에서는 half-leading(=leading/2)라는 개념이 사용됨
#### 1) line-height(줄 높이)
* normal/N(=font-size x N)/px, em, %
* `line-height=1`: leading 영역 없음
#### 2) letter-spacing(자간)
* normal/px, em, rem
#### 3) text-align(가로정렬)
* left/right/center/<u>justify</u>(마지막 줄 제외, 양쪽 끝으로 정렬)
> 세로정렬: padding, margin 이용
> inline-block: 크기값도 주면서 인라인 속성 확인할 때 사용하신다고 함
> cf. 버튼의 text-align 초기값이 가로세로 중앙정렬
#### 4) vertical-align(수직정렬): 인라인 요소 대상
* baseline(초기값)/top/bottom
* img 태그의 공백 없앨 때 주로 이용됨
* px값으로 y축 조정 가능
#### 5) text-indent(들여쓰기)
* mm, cm/px, em, %
#### 6) text-decoration
* underline/line-through/overline/dotted/wavy
* 앵커 태그의 밑줄 제거시 주로 이용됨
#### 7) text-overflow 
* clip(초기값), ellipsis(말줄임 표시)
* 컨테이너에 <u>overflow:hidden, white-space:nowrap</u>이 같이 사용되어야 기능함
* flex: 웹표준이 아님(candidate recommadation)

### (7) position(+top/bottom/left/right): 레이아웃①
#### 1) static(초기값)
html 작성순서(normal flow)를 가짐, 위치이동 불가
#### 2) relative
원래 자리를 기준으로 이동, 다른 콘텐츠의 레이아웃에 영향을 주지 않음
#### 3) absolute
`position: static`이 아닌 부모 요소의 위치를 절댓값으로 삼고, 절댓값을 찾아 html까지도 거슬러 올라감
#### 4) fixed 
스크롤 움직임과 상관없이 뷰포트에 고정 자리를 갖게 됨
```css
position: fixed;
top: 0;
left: 0;
right: 0;
```
#### 5) sticky(IE 지원 불가)
* 조상에 스크롤이 있다면(보통 html) 가장 가까운 부모 요소의 컨텐츠 영역에 달라붙음
#### 6) z-index
* `position: static`이 아닌 부모 요소의 z-index를 기준으로 -1 ~ n(양의 정수)로 표현함, 보통 10단위로 조절
* 부모요소가 index를 높여서 자식 위로 올라갈 수는 없으나, 자식 z를 낮춰서 부모 뒤로 갈 수 있음
> https://www.youtube.com/watch?v=JMOJrjMb95w

### (8) float: 레이아웃②
* `float:left`, `float:right`
* 한편에 정렬이 되는 특성 때문에 블록 박스 요소를 정렬하는 기본 방법으로 사용됨
* float를 적용한 요소는 `display: block`이 됨
* <span style="color: palevioletred">float된 요소는 normal flow에서 벗어나게 되어</span>, 그 부모요소는 자식의 높이값을 인식하지 못하게 됨
  * 대처법 
    1. 부모에 높이 값을 직접 지정함(유지보수에 부적합)
    2. 부모요소에 `overflow:`
    3. **clear: both**/left/right
    4. clear-fix
        ```css
        .wrap::after {
        content:'';
        display:block;
        clear:both;
        }
        ```
    5. 그 외 BFC를 만드는 방법
        > BFC(Block Formatting Context): 안팎의 float를 해제/마진 병합 방어


---
# 9/15(목)
`이호준 강사님` 

## 1. CSS(5) 
### (9) CSS Selector 심화
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvIHxv%2FbtrMoTzW3ME%2F8BaOzXWSB75Q3MBBXOLYek%2Fimg.png)

#### 1) Attribute selectors(속성 선택자): `^`(시작, 반대)/`$`(끝)/`*`(전체)/`~`(전체 중 단어)/`|`(하이픈)
  
#### 2) Pseudo-classes(가상 클래스)
* 존재하지 않는 유령 클래스를 선택, **특정 상태**에 발동
<!-- 여백 처리시 많이 사용함 -->
* ① 상호작용을 위한 가상 클래스: `:hover`, `:active`, `:checked`, `:focus`
* ② 순서에 따른 가상 클래스: `:first-`, `:last-`, `:-child`, `:-of-type`, `:nth-(even/odd)`
 
```html
<style>
input:hover {border: solid 5px green;}
input:active {border: solid 5px blue;}
input:focus {border: solid 5px red;}</style>
<input id="id" name="id" type="text">
```
* 부정 가상 선택자 `:not()`는 최신기능이므로 사용 가능성 X

#### 3) Pseudo-elements(가상 요소)
* 존재하지 않는 유령 요소를 선택해서 꾸밈
  
`::before`, `::after`: 가상 요소는 선택이 되지 않음

`::selection`

`::first-letter`, `::first-line`

### (10) Combinator(결합자)
* ` `자손, `>`자식, `+`인접형제, `>`일반형제
* 작성 순서대로 선택자의 방향도 흐른다!


### (11) Flex: 레이아웃③
> * https://flexngrid.com/
> * https://flexboxfroggy.com/#ko

* container 내 item 간의 `공간 배분`과 `정렬` 기능을 제공하는 **1차원 레이아웃** 모델
* `display: flex`지만 Block 레벨 요소의 성질을 가짐
* 컨테이너의 직계자식까지만 영향을 미침
* 배분 정렬시 지정된 너비/높이가 있어야 함
#### 1) flex-container에 사용하는 속성
1. **flex-direction**(축 방향): *row*/row-reverse/*column*/column-reverse
2. **justify-content**(*주축* 기준 배분, 정렬): flex-start/flex-end/center/space-between/*space-around*
3. **align-items**(**교차축** 기준 배분, 정렬): stretch(초기값)/*center*/flex-start/flex-end<br>
align-content(+wrap): 교차축에 아이템이 여러 줄일 때 사용
1. flex-wrap(줄 넘김): wrap/nowrap/wrap-reverse
2. flex-flow(축약형): wrap column <!-- flex-wrap: wrap; flex-direction: colum -->

#### 2) flex-item에 사용하는 속성
* flex(속기법): basis, grow, shrink
1. flex-basis(아이템 크기): 초기값 auto, width/height 무시하고 축과 컨텐츠 고려한 유연한 크기를 지정해줌(0, pm, em)
2. flex-grow: 컨테이너 확장시 각각의 아이템에 여백 할당
3. flex-shrink: 컨테이너 축소시 각각의 아이템에 크기 할당
4. align-self: align-items 무시하고 개별 아이템에 align 속성 부여, 초기값 stretch
5. order: 음수 포함, 작은 숫자부터 우선 순위 부여


---
# 9/16(금) 특강데이
`김지수 선배님` 
> * https://www.codingmonster.net/<br>
> * https://www.miricanvas.com/v/11ec56f<br>
> * https://github.com/brave-people/Dev-Event

#### 1. 멋사에서 공부한 기억
* 멋사에서 어떤 걸 배웠고 뭘 느꼈고 어떤 성장을 이루었는지 기업에서 꼭 물어봄
* 멋사 커리에서 기업은 진취적인 모습을 본다고 함. 밴딩머신, 책 집필 활동, 해커톤,
모던자바스크립트 오픈소스에 기여한 것이 좋은 인상을 주었음
* 멋사 당시, 당일 배움 후 동기들 대상으로 당일 강의를 함, 질문 받고 강사님들에게 답을 얻은 뒤 재강의를 함, 하루 3회도 진행하였고 그 결과 마진탑 전문가가 됨

#### 2. 이력서 작성, 면접 팁
* 이력서에 캐주얼한 사진 넣기
* **협업능력과 성장가능성, 리더십과 실행능력**을 어필할 것
* 요즘 면접은 대부분 비대면 진행
* 참고로 깃헙 레포 안에 들어가서 보지 않으니까 약간의 뻥튀기 첨가함
* 면접에서 회사의 개발자가 몇명인지 확인했다고 함, 체계적인 개발팀과 사수, 성장 환경이 조성되었는가 질문 필요
* 책이 면접에서 양날의 검이었음
* '여기어때' 떨어졌어도 최고의 면접 경험이었음

#### 3. 코딩, 구현 테스트 팁
* JS 제코베 100제, codility로 준비
* 코딩테스트는 var 키워드로 품
* 브라우저, 비동기, 포지션 말고 트랜스폼을 쓰는 이유, 리액트 장점 등을 물어봄
* 스타일 컴포넌트, 스토리북, 디자인 시스템 비교, 자세한 내용은 *자료* 참고

---
`김태곤님` 

#### 1. 코드 작성과 학습 조언
* 코드는 읽기 쉽게 작성
* 테스트 코드는 가능한 부분부터 작성할 것(테스트 코드 없이 리팩토링하는 것은 비행기에서 낙하산 없이 뛰어내리는 것)
* 한 커밋에는 한가지 문제만(추적 가능하게 유지)
* 실험은 한번에 하나씩만(배우면서 프로젝트를? 고생을 2배로 할 것)
* 나만의 학습 루틴을 만들어두기(어차피 평생 공부해야 함)
* 프론트엔드 개발자는 절반쯤은 ux 전문가가 되어야 함(코드 너머에 사용자 있어요)
* 풀스택 엔지니어링 지식을 익히되 풀스택 엔지니어를 지향하지 않기(전문성)
  * 프로젝트는 공부와 취업의 과정. 공부를 계속 해야함

#### 2. 회사 생활 조언
* 거절의 3단계 (숙고/대안제시/이득)
* **실무 능력** = 프로그래밍 스킬(구현)+도메인 지식(문제 정의-밖에서 어렵고, 해당 업계에서만 배울 수 있는 지식인 경우가 많음)+커뮤니케이션(협업)
* 도메인 지식을 어떻게 빨리 얻는가, 독서하듯 코드를 읽자! 많이 읽어야 빨리 읽고 이해하고 잘 쓸 수 있음
* 
---
`이수진님`
#### 1. 취준 4종 세트 전략 세우기
##### 1. 포트폴리오(*자료 참고* )
* 취업시 포트폴리오는 ~~필수~~ 옵션이다. 포폴에서 지원자의 열정, 성실성, 근면함, 소통 능력을 보여줄 수는 있다
* 포트폴리오는 ~~개발 프로젝트~~ 나의 성과 집약체면 된다. 이력서에 부족했던 자기 소개를 채우도록 한다. 자기계발과 자기 변화과정을 입증하라. 스쿨 성과물 일체의 모음집
* 포트폴리오 내 개발 프로젝트는 ~~많을수록~~ 완성도가 높을수록 좋다. 프로젝트 개수보다도 코드 품질 및 완성도가 중요. 1~3개 정도의 애플리케이션에서 react, react-redux를 사용한 수준이면 충분
* 포트폴리오는 ~~웹 페이지로 만들어야 한다.~~ 파워포인트, 노션, 워드, 깃헙 프로필, pdf, 개인홈페이지 등 그 어떠한 형식도 상관 없음. 하지만 웹으로 접근 가능하면 좋음. 절대로 디자인에 공을 들이지 마세요!
   
##### 2. 프로젝트
* 프로젝트를 통한 학습 과정: 프로젝트 70%+학습 30%, 절대로 학습을 놓지 말아야 함. 프로젝트를 통해 배우고자 하는 학습 목표를 반드시 세워야 하며, 진행 중 느낀 점을 기록해두면 나중에 인터뷰에 사용하게 됨
* 기초에 충실: 가독성, 기술 스택 키워드 중심! 1분 안에 보여지도록<br>
코딩 실력 및 코드 품질/아키텍쳐 및 시스템 디자인/git 사용 커밋 메시지, 브랜치 관리 방법/react, react-redux 애플리케이션 1-3개를 만들면 됨(es6 문법, 리액트, 리액트 훅, 컴포넌트 개념을 알고 있을까?)<br>
➩ 라이브러리 최소 사용, 1~2달 내에 완성가능한 규모로, 디자인보다는 코드 품질, 프로젝트 소개서(README.md)를 잘 쓸 것, 팀플에서 동료의 코드 리뷰를 열심히, vercel, heroku 등의 도구를 이용해 배포해 볼 것
* 프로젝트 설명은 2~3개의 불렛 포인트로 작성, 구체적으로 무엇을 개발했는지, 나의 기여/성과/숫자 위주로 작성(x를 하기 위해 y를 하여 Z를 기여함/혼자 또는 팀으로)<br>
<pre>project 1: XX 어플리케이션 개발
styled-component를 사용한 재사용이 가능한 디자인 시스템 구축
react-hook-form을 사용한 컴포넌트 개발 및 회원 가입-회원 인증을 위한 폼 유효성 처리</pre>
* 코드리뷰는 어떻게?
  1. 먼저 프로젝트의 코드 컨벤션, 기능 머지 등 리뷰 룰을 정하세요
  2. 풀 리퀘스트를 보낼 때 배경설명, Problem-Solution 순으로 어떻게 해겨했는지 적어주세요(사진 첨부)
  3. 단순히 코드 지적 이외에도 이해 안 가는 부분을 질문해주세요
  4. 이슈가 있다면 페어 프로그래밍으로 같이 해결해보세요
  5. 과반수 이상이 approve하면 merge 하세요

##### 3. 이력서(*자료 참고* )
* 반드시 한 페이지로 작성
* 이력서 제목 순서는 Skills, Projects, Experience, Education 또는 Education, Skills, Projects, Experience
* 직무 연관성이 제일 중요! 이름 밑에 채용공고에 나와있는 포지션 그대로 적고, 공고와 연관성이 있는 단어, 키워드를 사용할 것. 주니어, 시니어임을 표시
* pdf 포맷 변환 후 클라우드에 공유해서 링크 생성(https://bit.ly/sujin-resume)
* 문서 내에 이메일, 소셜미디어, 프로젝트 등 하이퍼링크를 추가한다. 모든 링크의 색, 폰트 등 스타일이 동일해야 함
* 영어 문법, 철자, 띄어쓰기, 문장 뒤 마침표 등 완벽성을 체크
* 직무전환자의 경우! 개인 스토리를 3~4가지 정도 준비. 개발과 무관한 직무를 했더라도 이전 직무 적고, 그 때의 업무 성과를 잘 포장
<pre>* 프로젝트를 A-Z까지 리딩한 경험
* 비즈니스 성과 (고객 유치, 성과 매출 달성, N명의 인터뷰, 비즈니스 인사이트 도출, 신사업 등)
* 업무 프로세스 개선(고질적인 문제점을 분석하고 제안해 새로운 프로세스를 만듦)
➩ 기술과 밀접하진 않지만 실제 개발 팀에서도 반드시 필요한 영역. 기업입장에서는 이 사람이 어떻게 일하는 사람인지, 어떤 사람인지 알고 싶어함</pre>
* 면접 질문 하루 2개씩 총 30개 정도 준비하심
* 스킬바는 쓰지 말자

##### 4. 면접, 테스트
* 면접(*자료 참고* ): 
  * 실제로 문제를 해결해본 경험이 있는지?
  * 커뮤니케이션을 잘 하는지?
  * 우리 팀 동료들과 협업을 잘 할 수 있을지?
    * 간단한 자기소개, 지원 이유, 현재 관심 분야, 앞으로 5년, 10년 후 어떤 개발자가 되고 싶은지 비전
    * 본인의 기술 스택과 숙련도 설명, 최근 일년 동안 성취한 경험에 대해 설명, 회사를 선택하는 기준이나 가치, 가장 기여를 많이 한 프로젝트?, 동료들에게 피드백을 주는 방법
    * STAR 전략(Situation문제 발견-Task방법 도출-Action해결 내용-Result성공과 실패): 어떻게 기술적으로 해결했는지 강조, 비즈니스 성장에 어떤 결과를 가져왔는지 설명
  
* 테스트: JS, React에서 벗어나지 않음
