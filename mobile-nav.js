document.addEventListener('DOMContentLoaded', function () {
  // Disable the old broken mobile bar shipped in the template (if present)
  document.querySelectorAll('.mobile-nav').forEach(function (el) {
    el.style.display = 'none';
  });

  var header = document.querySelector('header');
  if (!header) return;

  var headerRow = header.querySelector('.max-w-7xl') || header.firstElementChild;
  var desktopNav = header.querySelector('nav');
  if (!headerRow || !desktopNav || document.getElementById('mnav-toggle')) return;

  // Hamburger button (hidden on desktop by mobile.css)
  var toggle = document.createElement('button');
  toggle.id = 'mnav-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.style.display = 'none';
  toggle.style.background = 'transparent';
  toggle.style.border = 'none';
  toggle.style.color = '#fff';
  toggle.style.fontSize = '1.5rem';
  toggle.style.cursor = 'pointer';
  toggle.innerHTML = '<i class="fas fa-bars"></i>';
  headerRow.appendChild(toggle);

  // Dropdown built from the same links already in the desktop nav
  var panel = document.createElement('div');
  panel.id = 'mnav-panel';
  desktopNav.querySelectorAll('a').forEach(function (link) {
    panel.appendChild(link.cloneNode(true));
  });
  document.body.appendChild(panel);

  toggle.addEventListener('click', function () {
    panel.classList.toggle('open');
  });
  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { panel.classList.remove('open'); });
  });
});
