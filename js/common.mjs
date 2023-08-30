const btnStarts = [...document.querySelectorAll('.btn-start')];
const btnMode = document.querySelector('.btn-mode');
const home = document.querySelector('.home');
const test = document.querySelector('.test');
const result = document.querySelector('.result');
let isDarkMode = false;

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  isDarkMode = true;
  document.body.classList.add('dark');
}

btnMode.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

btnStarts.map(btnStart =>
  btnStart.addEventListener('click', () => {
    hideElement(home);
    hideElement(result);
    showElement(test);
  })
);

export function showElement(element) {
  element.classList.add('show');
}

export function hideElement(element) {
  element.classList.remove('show');
}
