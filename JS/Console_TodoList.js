const body = document.querySelector('body')
body.innerHTML =
    '<h1>Todo List</h1><ul><li>"new" - 새 할일 입력</li><li>"list" - 모든 할일 보기</li><li>"del" - 할일 삭제</li><li>"quit" - 나가기</li></ul>'

const list = []
let todo = prompt('오늘의 할 일은?')
while (todo !== 'quit') {
    if (todo !== 'new' || todo !== 'list' || todo !== 'del') 
        todo = prompt('유효한 명령어를 입력해주세요')
    
    else {
        if (todo === 'new') {
            const newList = prompt('할일을 입력해주세요')
            list.push(newList)
            console.log(`목록에 추가했습니다: ${newList}`)
        } else if (todo === 'list') {
            console.log('********')
            for (i = 0; i < list.length; i++) {
                console.log(i + ': ' + list[i])
            }
            console.log('********')
        } else if (todo === 'del') {
            const delIndex = prompt('삭제할 할일의 인덱스를 입력해주세요')
            list.slice(0, 1, list[delIndex])
            console.log(`입력한 할일이 삭제되었습니다`)
        }
        todo = prompt('오늘의 할 일은?')
    }
}
console.log('앱을 종료합니다')

