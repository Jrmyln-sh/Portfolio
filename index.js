const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  icon.classList.remove('ri-moon-line');
  icon.classList.add('ri-sun-line');
}
toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('dark-theme');
  
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  icon.classList.toggle('ri-moon-line');
  icon.classList.toggle('ri-sun-line');
});

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
