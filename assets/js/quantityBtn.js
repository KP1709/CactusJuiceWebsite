let increaseQuantityBtn = document.getElementById("quantity-btn-increase");
let decreaseQuantityBtn = document.getElementById("quantity-btn-decrease");
let productQuantity = document.getElementById("quantity__input-box");
let addToCartBtn = document.getElementById("add-to-cart-btn");

function getBottleMlValue() {
  let ele = document.getElementsByName('juice-ml');

  for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked)
          return ele[i].value
  }
}

increaseQuantityBtn.addEventListener("click", () => {
  productQuantity.value = parseInt(productQuantity.value) + 1;

  // In case if user presses button with no value in input
  productQuantity.value === "NaN" ? productQuantity.value = 1 : productQuantity.value
})

decreaseQuantityBtn.addEventListener("click", () => {
  productQuantity.value <= 1 ? productQuantity.value = 1 : productQuantity.value = parseInt(productQuantity.value) - 1;

  // In case if user presses button with no value in input
  productQuantity.value === "NaN" ? productQuantity.value = 1 : productQuantity.value
})


addToCartBtn.addEventListener("click", () => {
  if (parseInt(productQuantity.value) && parseInt(productQuantity.value) > 0) {
    alert(`Your order for ${parseInt(productQuantity.value)} ${getBottleMlValue()} bottle(s) has been requested`)
  }
  else {
    alert("An invalid quantity has been entered - enter a valid value")
  }
})

