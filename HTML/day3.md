> 8/31
  # HTML
HTML: 웹문서 마크업 언어, 웹표준은 HTML Living Standard

- **Document element & metadata**
  <!DOCTYPE html>
  <html>
  <head>
  <title>
  <link>
  <meta>
    charset 
    name="author": 문서 작성자
    name="description": 설명, 검색어
    name="viewport": 모바일 화면 사이즈 값 설정
    http-equiv="X-UA-Compatible”: IE브라우저 페이지 랜더링 형식 지정

- **Sections(섹셔닝 요소)**
  <body>
  <header>
  <h1> … <h6>: 헤딩요소, 페이지 계층 구조의 기준, 익명 영역(anonymous section)을 생성
  <nav>: 현재 페이지 내, 다른 페이지로의 링크
  <section>+h$: 연관성
  <article>+h$: 독립적, 위젯
    <hgroup>
    <h1>제목</h1>
    <h2>소제목</h2>
  </hgroup>
  <aside>: 각주 혹은 광고, 사이드 영역
  <footer>
  <address>

- **Grouping content**
  <div>
  <ol>, <ul> - <li>: ol, ul의 직계자식 요소로는 li만을, li의 부모 요소는 ol, ul만을 가질 수 있음. 아이템 개수는 최소 3개 이상.
  <dl> - <dt>, <dd>: dl도 직계자식 요소로 dt, dd, div만 가질 수 있음
  <figure> - <img>, <figcaption>: 이미지와 캡션 연결
  <p>: 블록 레벨, 하나의 완결된 문장이나 문단을 가져야 함. 디자인적 요소가 아님
  <pre>: HTML 작성 모습 그대로 표현, 컴퓨터 코드
  ```HTML
    <pre>
    <code>
      let val= 1;
      function myFunc(value){
        return value;
      }
      myFunc(val);
    </code>
    </pre>
    <blockquote> - <p>, <cite>
    <p>
    <main>
    <hr>: 이야기에서의 장면 전환 혹은 문단 안에서 주제가 변경되었을 때 그 구별을 위해 사용. 역시 디자인적 요소 아님
  (Entity)
