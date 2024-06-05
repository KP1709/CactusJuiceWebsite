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

// Transition for Ingredient section
const ingredientUnderline = document.querySelector('path')
const ingredients = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ingredientUnderline.classList.add('draw-in')
      return;
    }
  });
}, { threshold: 1 });

ingredients.observe(document.querySelector('section#ingredients'));


// Transitions for Side Effects section
const effect1 = document.querySelector('#effect-1');
const effect2 = document.querySelector('#effect-2');
const effect3 = document.querySelector('#effect-3');
const effect4 = document.querySelector('#effect-4');

const effects = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      effect1.classList.add('fade-in');
      effect2.classList.add('fade-in');
      effect3.classList.add('fade-in');
      effect4.classList.add('fade-in');
      return;
    }
  });
}, { threshold: 0.40 });

effects.observe(document.querySelector('ul#effects__list'));
