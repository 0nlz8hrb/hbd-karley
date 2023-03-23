const button = document.querySelector('.birthday-button');
const image = document.querySelector('.cat-gif');

button.addEventListener('click', () => {
  if (image.style.display === 'none') {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
});