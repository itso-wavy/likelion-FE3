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
