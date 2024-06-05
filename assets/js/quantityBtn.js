let increaseQuantityBtn = document.getElementById("quantity-btn-increase");
let decreaseQuantityBtn = document.getElementById("quantity-btn-decrease");
let productQuantity = document.getElementById("quantity__input-box");

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