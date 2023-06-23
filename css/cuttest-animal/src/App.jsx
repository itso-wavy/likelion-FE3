// import { useState } from 'react';
import "./tailwind.css";
import Card from "./components/Card.jsx";
import imgFirefox from "./images/firefox.webp";
import imgDesertfox from "./images/desertfox.webp";
import imgSnowfox from "./images/snowfox.webp";

const App = () => {
  // Props System
  // : 부모에서 자식으로 전달하는 데이터를 의미합니다. 그 역방향은 불가능

  // Props의 사용법
  // 1. JSX에 속성의 형태로 사용합니다.
  // 2. React는 속성을 모아서 하나의 객체로 만듭니다.
  // 3. 자식 컴포넌트는 함수의 첫번째 인자로 Props를 전달 받습니다.
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold">World Most Cuttest Animals</h1>
      <div className="mb-4 flex gap-2 px-2">
        <Card
          title="랫서판다"
          text="판다보다 작다는 의미에서 lesser panda라고 불립니다."
          imgSrc={imgFirefox}
        />
        <Card
          title="사막여우"
          text="열을 배출하기 위한 널찍한 귀가 특징입니다."
          imgSrc={imgDesertfox}
        />
        <Card
          title="북극여우"
          text="여름에는 털갈이로 꼬리와 다리가 갈색이 됩니다."
          imgSrc={imgSnowfox}
        />
      </div>
    </>
  );
};

export default App;
