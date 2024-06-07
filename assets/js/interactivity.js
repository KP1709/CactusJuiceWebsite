// Get width of current window
var width = window.innerWidth;

// Transition for Hero section
const heroImg = document.getElementById("hero__img-tablet");
const hero = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && width < 1000) {
        heroImg.classList.add('slide-in-left')
        return;
      }
      else if (entry.isIntersecting && width >= 1000) {
        heroImg.classList.add('slide-in-down')
        return;
      }
    });
  }, { threshold: 0.75 });
  
hero.observe(document.querySelector('section#hero'));


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


// Transitions for Recommended Drinks section
const drink1 = document.querySelector('#drink-1');
const drink2 = document.querySelector('#drink-2');
const drink3 = document.querySelector('#drink-3');
const drink4 = document.querySelector('#drink-4');

const drinks = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      drink1.classList.add('fade-in');
      drink2.classList.add('fade-in');
      drink3.classList.add('fade-in');
      drink4.classList.add('fade-in');

      return;
    }
  });
}, { threshold: 0.40 });

drinks.observe(document.querySelector('ul#recommend__drinks.grid'));
