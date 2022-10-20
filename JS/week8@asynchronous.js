// #1 Promise
/* 
new Promise((resolve, reject) => {
    //code
})
.then(result => result)
.then(resutl => result)
.catch(err => err)
.filnally(result =>result)

pending(대기상태) - resolve(해결) - fulfilled(성공)
pending(대기상태) - reject(거부) - rejected(실패)
*/

let p = new Promise(function (resolve, reject) {
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(m => {
    alert(m)
    return m.split(' ')[0]
}).then(m => {
    alert(m)
    throw Error('Error 발생! 경고경고!')
    return m[0]
}).then(m => {
    alert(m)
    return m
}).catch(m => {
    console.log(m)
    alert('catch 실행!')
})
console.log(p)


// #2 fetch
fetch('http://test.api.weniv.co.kr/mall')
    .then(productData => productData.json())
    .then(p => {
        console.log(p.map(i => i.productName)); 
        return p;
    })
    .then(p => {
        console.log(p.map(i => i.price).filter(i => i >= 10000));
        return p;
    })
    .then(p => {
        const main = document.createElement('main');
        p.forEach(i => {
            const productCard = document.createElement('article')
            const productName = document.createElement('h2')
            const productPrice = document.createElement('p')

            productName.textContent = `상품명: ${item.productName}`
            productPrice.textContent = `가격: ${item.price}`
            productCard.appendChild(productName)
            productCard.appendChild(productPrice)

            main.appendChild(productCard)
        })
        document.body.appendChild(main)
    })
    .catch(error => {
        alert('Error!')
        // error page로 리다이렉트
        console.log('Error!!');
    })


// #3 async await
async function f1() {
    return 100;
}
f().then(alert) // 100

async function f2() {
    return 'hello world'
}
console.log('!')
f()
.then(r => {
    alert(r)
    return r[0]
})
console.log('!')

async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('완료!'), 1000)
    })

    let result = await promise
    alert(result) // '완료!'
}
f()

async function getData() {
    const response = await (await fetch (`https://test.api.weniv.co.kr/mall`)).json()
    console.log(productData)
    console.log(productData.map(i => i.productName))
    console.log(productData.map(i => i.price).filter(i => 10000 < i))

    const main = document.createElement('main')
    productData.forEach(i => {
        const productCard = document.createElement('article')
        const productName = document.createElement('main')
        const productPrice = document.createElement('p')

        productName.textContent = `상품명: ${i.productName}`
        productPrice.textContent = `가격: ${i.price}`

        productCard.appendChild(productName)
        productCard.appendChild(productPrice)

        main.appendChild(productCard)
    })
    document.body.appendChild(main)
}
getData()