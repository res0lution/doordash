/* eslint-disable no-undef */
(() => {
  const btn = document.querySelector('.js--nav-icon');
  const nav = document.querySelector('.js--main-nav');
  const icon = btn.querySelector('i');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times-circle');
  });
})();
