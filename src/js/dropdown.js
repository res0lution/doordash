/* eslint-disable no-undef */
(() => {
  const button = document.querySelector('.form__button');
  const label = document.querySelector('.form__label-text');
  const options = document.querySelector('.form__options');

  const NODES = ['BUTTON', 'LABEL', 'I'];

  window.addEventListener('click', (e) => {
    if (NODES.includes(e.target.nodeName)) return;
    button.classList.remove('form__active');
  });

  button.addEventListener('click', () => {
    button.classList.toggle('form__active');
  });

  options.addEventListener('click', (e) => {
    label.innerText = e.target.innerText;
    button.classList.add('form__selected');
    button.classList.remove('form__active');
  });
})();
