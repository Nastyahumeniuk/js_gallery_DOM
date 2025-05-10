'use strict';

const largeImge = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', () => {
  event.preventDefault();

  const target = event.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      largeImge.src = link.href;
    }
  }
});
