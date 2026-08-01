// Portfolio interactions
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', link.getAttribute('href'));
  });
});

document.querySelectorAll('a[download]').forEach((link) => {
  link.addEventListener('click', () => {
    console.log('Downloading project file:', link.getAttribute('href'));
  });
});
