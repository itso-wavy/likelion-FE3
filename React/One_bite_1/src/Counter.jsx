import React, { useState } from 'react'
import OddEvenResult from './OddEvenResult'

function Counter({ initialValue }) { // { initialValue }
  const [count, setCount] = useState(initialValue)
  // state가 변하면 부모 컴포넌트를 리랜더링 해주는 함수

  function onIncrease() { setCount(count + 1) }
  function onDecrease() { setCount(count - 1) }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}/>
    </>
  )

  // defaultProps 설정으로 에러 방지
  Counter.defaultProps = {
    initialValue: 0,
  }
}
export default Counter





