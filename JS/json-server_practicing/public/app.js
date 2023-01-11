const btnRead = document.querySelector('#btnImport')
const btnCreate = document.querySelector('#btnCreate')

const productInfo = {
    productName: document.querySelector('#inputName').value,
    price: document.querySelector('#inputPrice').value,
    stockCount: document.querySelector('#inputStock').value,
    viewCount: 0,
    pubDate: document.querySelector('#inputDate').value,
    modDate: document.querySelector('#inputDate').value,
}

// Read
btnRead.addEventListener('click', e => {
    fetch('http://localhost:3000/product', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            for (i of data) {
                const $container = document.createElement('section')
                const $productName = document.createElement('h2')
                const $price = document.createElement('p')

                $productName.innerText = i.productName;
                $price.innerText = i.price;
                $container.appendChild($productName)
                $container.appendChild($price)

                document.body.appendChild($container)
            }
        })
        .catch(e => console.log('실패:', e))
})

// Create
btnCreate.addEventListener('click', () => {
    fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productInfo)
    })
        .then(response => response.json())
        .then(data => {
            const $container = document.createElement('section')
            const $productName = document.createElement('h2')
            const $price = document.createElement('p')

            $productName.innerText = data.productName;
            $price.innerText = data.price;
            $container.appendChild($productName)
            $container.appendChild($price)

            document.body.appendChild($container)
        })
        .catch(e => console.log('실패:', e))
})

// Update - put 또는 patch
btnCreate.addEventListener("click", () => {
    fetch("http://localhost:3000/product", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${토큰값}`,
        },
        body: JSON.stringify(productInfo),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("성공:", data);
        })
        .catch((error) => {
            console.error("실패:", error);
        });
});

// Delete
// btnCreate.addEventListener("click", () => {
    fetch(`http://localhost:3001/product/${id}`, { 
        method: "DELETE" 
    })
    // const btnCreate = document.querySelector("#btnCreate");
    // btnCreate.addEventListener("click", (event) => {
    //     // console.log("눌렀다.");

    //     const productInfo = {
    //         productName: document.querySelector("#productname").value,
    //         price: document.querySelector("#productprice").value,
    //         stockCount: document.querySelector("#productstock").value,
    //         viewCount: 0,
    //         pubDate: document.querySelector("#productpubdate").value,
    //         modDate: document.querySelector("#productpubdate").value,
    //     };

    //     fetch("http://localhost:3000/product", {
    //         method: "DELETE",
    //         // headers: { "Content-Type": "application/json" },
    //         // body: JSON.stringify(productInfo),
    //     });
    // });
