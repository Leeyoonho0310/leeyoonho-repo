function displayProduct(products) {
  const productListEL = document.querySelector("#product-list");
  productListEL.innerHTML = ""; // 상품 목록 초기화

  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src= '${product.image}' alt="${product.name}" />
    <p>상품 이름 ${product.name}, 가격: ${product.price}원</p>
    `;

    productListEL.append(div);
  });
}

// 상품 데이터(jsom mock)를 가져오는 함수
function fetchProducts() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => displayProduct(data));
}

fetchProducts();
