# 2. CSS: Cascading Style Sheets(1) 
: 우선순위에 따라 적용되는 스타일 언어
```css
Selector(선택자) { /* Declaration Block(선언블록) */
    Property(속성): Value(값);
}
```

## (1) 우선순위
* 내부, 외부 중 작성순서에 따라 적용
  * 내부 CSS
  * 외부 CSS: 공통 CSS+커스텀 CSS
  * 인라인 CSS(비권장)

* 다중 스타일시트(엣룰): @charset, @import, @font-face, @keyframes, @media, @supports
> link header.css ➩ @import "menu.css"
## (2) 벤더프리픽스
> 오토프리픽서 CSS: https://autoprefixer.github.io/

## (3) CSS Selector
* 전체 선택자, 타입 선택자, 아이디 선택자, 클래스 선택자
* 선택자 우선순위: 후자 우선의 원칙, 구체성(명시도)의 원칙, 중요성의 원칙
  * Specificity(구체성): 타입/가상요소(::) < class/가상클래스(:)/속성 < id < inline-style, 전체선택자는 무시됨
* [셀렉터 심화]()

## (4) 박스 모델
### 1) 박스의 구성
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
### 2) 박스의 유형(display): 
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
### 3) 대체 박스 모델
`box-sizing: border-box`

* IE 지원 불가: grid, flex, arrow function, for of문 
## (5) Declarations(선언)
### 1) 단위
* ① 절대 길이 단위: 모니터 크기에 상관없이 똑같이 고정(cm, mm, px)
  * px(picture + element): 뷰포트에서 이미지를 표현하는 가장 작은 단위, 화소가 아니라 인치를 96등분한 것
  
* ② 상대 길이 단위: 변수처럼 수정이 쉬워 유지보수에 용이함, **폰트**에 흔히 적용(em, rem, vw, vh, %)
  * em: 기존 폰트사이즈 기준의 배수, 지정사이즈가 없다면 부모요소로부터의 상속값 기준
  * rem(root em): html 기준으로 배수
    > 멘토님: 기본적으로 rem을 많이 쓰고 텍스트의 비율에 따라 달라져야 할 요소의 경우(버튼 large, medium, small 등) em을 씁니다!
  * %: 기존 콘텐츠값 기준(보더/마진/패딩 제외) 백분율 단위, 설정값이 없다면 상속값 기준, 즉 100%=1em, **부모의 높이가 auto인 경우는 작동하지 않음**
  * vw / vh: 뷰포트를 기준으로 하는 백분율 단위
  * vmin / vmax: 화면 가로세로 중 짧은 길이를 vmin, 긴 길이를 vmax로 하는 백분율 단위

### 2) overflow
* 속기법: overflow-x, overflow-y
* visible(초기값)/hidden/scroll/hiddenscroll/scroll hidden

> cf. [overflow hidden을 사용한 자식선택자](https://www.google.com/search?q=overflow+hidden%EC%9D%84+%EC%82%AC%EC%9A%A9%ED%95%9C+%EC%9E%90%EC%8B%9D%EC%84%A0%ED%83%9D%EC%9E%90&sourceid=chrome&ie=UTF-8)

### 3) background
* -image/-size/-color/-repeat/-position + attatchment
  * **-image**<br>
    img 태그: 백엔드와 협업에 필요한 동적 이미지, 시멘틱<br>
    background-image: 정적 이미지, 논시멘틱-스크린리딩X<br>
    img태그와 달리 background-image는 사이즈가 주어지지 않으면 나타나지 않음
  * **-size**: contain/cover/100%

### 4) font
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

### 5) opacity
* 0~1로 투명도 조절, 0.5=50% 
* 투명도가 들어간 요소 안의 내용물도 함께 투명해짐

### 6) color

## (6) text
![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b20dde7-b3bf-4f86-9f70-c35a0a776002%2Ffont.png?table=block&id=4298f7de-5485-4733-a16b-517f175e3dfe&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1610&userId=&cache=v2)

* 전통적 출판물과는 달리 웹에서는 half-leading(=leading/2)라는 개념이 사용됨
### 1) line-height(줄 높이)
* normal/N(=font-size x N)/px, em, %
* `line-height=1`: leading 영역 없음
### 2) letter-spacing(자간)
* normal/px, em, rem
### 3) text-align(가로정렬)
* left/right/center/<u>justify</u>(마지막 줄 제외, 양쪽 끝으로 정렬)
> 세로정렬: padding, margin 이용
> inline-block: 크기값도 주면서 인라인 속성 확인할 때 사용하신다고 함
> cf. 버튼의 text-align 초기값이 가로세로 중앙정렬
### 4) vertical-align(수직정렬): 인라인 요소 대상
* baseline(초기값)/top/bottom
* img 태그의 공백 없앨 때 주로 이용됨
* px값으로 y축 조정 가능
### 5) text-indent(들여쓰기)
* mm, cm/px, em, %
### 6) text-decoration
* underline/line-through/overline/dotted/wavy
* 앵커 태그의 밑줄 제거시 주로 이용됨
### 7) text-overflow 
* clip(초기값), ellipsis(말줄임 표시)
* 컨테이너에 <u>overflow:hidden, white-space:nowrap</u>이 같이 사용되어야 기능함
* flex: 웹표준이 아님(candidate recommadation)

## (7) position(+top/bottom/left/right): 레이아웃①
### 1) static(초기값)
html 작성순서(normal flow)를 가짐, 위치이동 불가
### 2) relative
원래 자리를 기준으로 이동, 다른 콘텐츠의 레이아웃에 영향을 주지 않음
### 3) absolute
`position: static`이 아닌 부모 요소의 위치를 절댓값으로 삼고, 절댓값을 찾아 html까지도 거슬러 올라감
### 4) fixed 
스크롤 움직임과 상관없이 뷰포트에 고정 자리를 갖게 됨
```css
position: fixed;
top: 0;
left: 0;
right: 0;
```
### 5) sticky(IE 지원 불가)
* 조상에 스크롤이 있다면(보통 html) 가장 가까운 부모 요소의 컨텐츠 영역에 달라붙음
### 6) z-index
* `position: static`이 아닌 부모 요소의 z-index를 기준으로 -1 ~ n(양의 정수)로 표현함, 보통 10단위로 조절
* 부모요소가 index를 높여서 자식 위로 올라갈 수는 없으나, 자식 z를 낮춰서 부모 뒤로 갈 수 있음
> https://www.youtube.com/watch?v=JMOJrjMb95w

## (8) float: 레이아웃②
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

## (9) CSS Selector 심화
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvIHxv%2FbtrMoTzW3ME%2F8BaOzXWSB75Q3MBBXOLYek%2Fimg.png)

### 1) Attribute selectors(속성 선택자): `^`(시작, 반대)/`$`(끝)/`*`(전체)/`~`(전체 중 단어)/`|`(하이픈)
  
### 2) Pseudo-classes(가상 클래스)
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

### 3) Pseudo-elements(가상 요소)
* 존재하지 않는 유령 요소를 선택해서 꾸밈
  
`::before`, `::after`: 가상 요소는 선택이 되지 않음

`::selection`

`::first-letter`, `::first-line`

## (10) Combinator(결합자)
* ` `자손, `>`자식, `+`인접형제, `>`일반형제
* 작성 순서대로 선택자의 방향도 흐른다!


## (11) Flex: 레이아웃③
> * https://flexngrid.com/
> * https://flexboxfroggy.com/#ko

* container 내 item 간의 `공간 배분`과 `정렬` 기능을 제공하는 **1차원 레이아웃** 모델
* `display: flex`지만 Block 레벨 요소의 성질을 가짐
* 컨테이너의 직계자식까지만 영향을 미침
* 배분 정렬시 지정된 너비/높이가 있어야 함
### 1) flex-container에 사용하는 속성
1. **flex-direction**(축 방향): *row*/row-reverse/*column*/column-reverse
2. **justify-content**(*주축* 기준 배분, 정렬): flex-start/flex-end/center/space-between/*space-around*
3. **align-items**(**교차축** 기준 배분, 정렬): stretch(초기값)/*center*/flex-start/flex-end<br>
align-content(+wrap): 교차축에 아이템이 여러 줄일 때 사용
1. flex-wrap(줄 넘김): wrap/nowrap/wrap-reverse
2. flex-flow(축약형): wrap column <!-- flex-wrap: wrap; flex-direction: colum -->

### 2) flex-item에 사용하는 속성
* flex(속기법): basis, grow, shrink
1. flex-basis(아이템 크기): 초기값 auto, width/height 무시하고 축과 컨텐츠 고려한 유연한 크기를 지정해줌(0, pm, em)
2. flex-grow: 컨테이너 확장시 각각의 아이템에 여백 할당
3. flex-shrink: 컨테이너 축소시 각각의 아이템에 크기 할당
4. align-self: align-items 무시하고 개별 아이템에 align 속성 부여, 초기값 stretch
5. order: 음수 포함, 작은 숫자부터 우선 순위 부여


## (12) Grid: 레이아웃③


## (13) Transition, Transform


## (14) Animation


## (15) Perspective


## (16) 미디어쿼리


## (17) SVG


## (18) 실무 테크닉