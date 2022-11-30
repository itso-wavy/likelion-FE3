import React from 'react'
import Container from './Container.jsx';
import Counter from './Counter.jsx'
import MyHeader from './MyHeader.jsx'
// import './App.css'

function App() {
  /* const style = {
    App: {
      // backgroundColor: 'black'
    },
    h2: {
      color: 'forestgreen'
    },
    bold_text: {
      fontWeight: 'lighter',
      color: 'red'
    }
  } */
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 4
  }

  return (
    <Container>
      <MyHeader />
      <Counter {...counterProps} />
    </Container>
  );
}

export default App;
