import { useState } from 'react'
// React에서 사용자 입력 처리하기
// 사용자의 입력값을 핸들링할 수 있도록 useState와 핸들링 함수로 저장
export default function DiaryEditor() {
const [state, setState] = useState({
  author: '',
  content: '',
  emotion: 1,
})

const handleChangedState = e => {
  console.log(e);
  setState({
    ...state,
    [e.target.name]: e.target.value,
    // ...state와 author의 순서를 바꾸면 안 됨
  })
}

const handleSubmit = () => {
  console.log(state);
  alert('SAVE SUCCESS')
}
  return (
    <div className='diary-editor'>
      <h2>오늘의 일기</h2>
      <div>
        <input type="text" value={state.author} name='author' onChange={handleChangedState} />
        <br />
        <textarea value={state.content} name='content' onChange={handleChangedState} />
        <br />
        <span>오늘의 감정 점수: </span>
        <select value={state.emotion} name='emotion' onChange={handleChangedState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <br />
        <button onClick={handleSubmit}>SAVE</button>
      </div>
    </div>
  )
}
