/* eslint-disable no-undef */
(() => {
  const navbar = document.getElementById('navbar');

  // eslint-disable-next-line no-multi-assign
  const sticky = (navbar.offsetTop = 60);

  const onScrollSticky = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', onScrollSticky);
})();
