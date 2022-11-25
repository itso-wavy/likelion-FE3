import { useState } from 'react';

function Header(props) {
    return (
        <header>
            <h1><a href='/' onClick={e => {
                e.preventDefault();
                props.onChangeMode(); // 함수를 호출해서 이벤트 기능 부여
            }}>{props.title}</a></h1>
        </header>
    )
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </article>
    )
}

function Nav(props) {
    const list = []
    // <li><a href='/read/1'>html</a></li>,
    // <li><a href='/read/2'>css</a></li>,
    // <li><a href='/read/3'>js</a></li>

    for (let i = 0; i < props.topics.length; i++) {
        let tpc = props.topics[i]
        list.push(
            <li key={tpc.id}><a id={tpc.id} href={'/read/' + tpc.id} onClick={e => {
                e.preventDefault()
                props.onChangeMode(e.target.id)
            }}>{tpc.title}</a></li>
        )
    }

    return (
        <nav>
            <ol>
                {list}
            </ol>
        </nav>
    )
}

function App() {
    const mode = 'WELCOME'
    const topics = [
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' }
    ]
    let content = null
    if(mode === 'WELCOME'){
        content = <Article title='Welcome' body='Hello, WEB'></Article>
    } else if(mode === 'READ'){
        content = <Article title='Read' body='Hello, Read'></Article>
    }

    return (
        <div>
            <Header title='WEB' onChangeMode={() => {
                mode = 'WELCOME'            
            }} />
            <Nav topics={topics} onChangeMode={() => {
                mode ='READ'            
            }} />
            <Article title='Welcome' body='Hello, WEB' />
        </div>
    )
}

export default App;
