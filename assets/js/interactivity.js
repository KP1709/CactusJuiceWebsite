// Transition for Hero section
const heroImg = document.getElementById("hero__img");
const hero = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroImg.classList.add('slide-in-left')
        return;
      }
    });
  }, { threshold: 1 });
  
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
