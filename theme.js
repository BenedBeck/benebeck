const toggle = document.getElementById('theme-toggle');
const stored = localStorage.getItem('benebeck-theme');
if (stored) document.documentElement.setAttribute('data-theme', stored);

toggle.onclick = () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('benebeck-theme', next);
};
