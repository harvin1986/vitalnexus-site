// Phone menu: toggles the site navigation under 820px.
const button = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');

if (button && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => setOpen(!nav.classList.contains('open')));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      button.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !button.contains(event.target)) {
      setOpen(false);
    }
  });
}
