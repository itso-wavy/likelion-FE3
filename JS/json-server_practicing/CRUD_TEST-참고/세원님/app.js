// Read
const btnLoad = document.querySelector("#btn-load");
const sec = document.querySelector(".sec");
btnLoad.addEventListener("click", (event) => {
  // console.log("눌렀다.");
  fetch("http://localhost:3001/product", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (item of data) {
        // console.log(i);
        const $container = document.createElement("section");
        const $productName = document.createElement("h2");
        const $price = document.createElement("p");
        const $deleteBtn = document.createElement("button");
        const $updateBtn = document.createElement("button");

        $updateBtn.classList.add("updateBtn");
        $deleteBtn.innerText = "삭제하기";
        $updateBtn.innerText = "수정하기";
        $productName.innerText = item.productName;
        $price.innerText = `가격 : ${item.price}`;

        $container.appendChild($productName);
        $container.appendChild($price);
        $container.appendChild($deleteBtn);
        $container.appendChild($updateBtn);
        document.body.appendChild($container);

        $deleteBtn.addEventListener("click", () => {
          deleteProduct(item.id, $container);
        });

        $updateBtn.addEventListener("click", () => {
          updateProduct(item, $container);
        });

        sec.appendChild($container);
      }
    });
});

//create
const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", (event) => {
  // console.log("눌렀다.");

  const productInfo = {
    productName: document.querySelector("#inp-name").value,
    price: document.querySelector("#inp-price").value,
    stockCount: document.querySelector("#inp-stock").value,
    viewCount: 0,
    pubDate: document.querySelector("#inp-date").value,
    modDate: document.querySelector("#inp-date").value,
  };

  fetch("http://localhost:3001/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productInfo),
  })
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((item) => {
      const $container = document.createElement("section");
      const $productName = document.createElement("h2");
      const $price = document.createElement("p");

      $productName.innerText = item.productName;
      $price.innerText = item.price;

      $container.appendChild($productName);
      $container.appendChild($price);

      document.body.appendChild($container);
    });
});

// 요소 삭제
const deleteProduct = (id, container) => {
  const check = confirm("삭제하시겠습니까?");
  if (check === true) {
    fetch(`http://localhost:3001/product/${id}`, {
      method: "DELETE",
    }).then(() => {
      container.remove();
    });
  }
};

// 요소 수정하기
const updateProduct = ({ id }, container) => {
  const h2 = container.querySelector("h2");
  const p = container.querySelector("p");
  const updateBtn = container.querySelector(".updateBtn");

  // 컨테이너에 인풋창이 있다면 수정한 값 등록하기
  if (container.querySelector("input")) {
    const $inputName = container.querySelector("input[type=text]");
    const $inputPrice = container.querySelector("input[type=number]");
    const updateInfo = {
      productName: $inputName.value,
      price: $inputPrice.value,
    };

    fetch(`http://localhost:3001/product/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    }).then(() => {
      h2.style.display = "block";
      p.style.display = "block";

      h2.textContent = updateInfo["productName"];
      p.textContent = updateInfo["price"];

      $inputName.remove();
      $inputPrice.remove();

      updateBtn.innerText = "수정하기";
    });
  } else {
    // 컨테이너에 인풋창이 없다면 인풋창을 만들어 수정할 수 있게 만들기
    const productName = document.createElement("input");
    const productPrice = document.createElement("input");

    productName.type = "text";
    productPrice.type = "number";
    productName.value = h2.innerText;
    productPrice.value = parseInt(p.textContent.split("가격 :")[1]);
    h2.style.display = "none";
    p.style.display = "none";

    container.prepend(productPrice);
    container.prepend(productName);
    updateBtn.innerText = "등록하기";
  }
};