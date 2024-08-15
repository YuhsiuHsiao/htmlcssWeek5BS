import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

document.getElementById('rotateImage').addEventListener('click', function () {
  this.classList.toggle('rotate-180');
});