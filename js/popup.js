const ordenamiento = document.querySelector('.ordenamiento');
const close = document.querySelector('.close');

image.addEventListener('click', () => {
  image.classList.add('enlarged');
});

close.addEventListener('click', () => {
  image.classList.remove('enlarged');
});