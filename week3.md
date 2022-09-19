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
  - [5. order: 음수 포함, 작은 숫자부터 우선 순위 부여](#5-order-음수-포함-작은-숫자부터-우선-순위-부여)
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
  
#### 1) flex-container에 사용하는 속성
1. **flex-direction**(축 방향): *row*/row-reverse/*column*/column-reverse
2. **justify-content**(*주축* 기준 배분, 정렬): flex-start/flex-end/center/space-between/*space-around*
* 지정된 너비/높이가 있어야 배분됨!
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