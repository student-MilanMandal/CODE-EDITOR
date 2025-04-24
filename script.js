let htmlInput = document.querySelector('.html-editor textarea');
let cssInput = document.querySelector('.css-editor textarea');
let jsInput = document.querySelector('.js-editor textarea');

let save = document.querySelector('#save');
let Iframeoutput = document.querySelector('#output');
let outputContainer = document.querySelector('.output-container');
let full = document.querySelector('#full');
let copy = document.querySelectorAll('.copy');

save.addEventListener('click', () => {
  //ifream console document ka ander likh raha hai
  Iframeoutput.contentDocument.body.innerHTML = htmlInput.value;
  Iframeoutput.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`;
  Iframeoutput.contentWindow.eval(jsInput.value);
  save.src = 'paused.svg';

  // ⏱️ After 5 seconds, change it back to save.svg
  setTimeout(() => {
    save.src = 'save.svg';
  }, 5000); // 5000 milliseconds = 5 seconds
});

full.addEventListener('click', () => {
  outputContainer.classList.toggle('output-full-active');
  if (outputContainer.classList.contains('output-full-active')) {
    full.style.transform = 'rotate(180deg)';
  } else {
    full.style.transform = 'rotate(0deg)';
  }
});
copy.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('copy1')) {
      navigator.clipboard.writeText(htmlInput.value);
    } else if (e.classList.contains('copy2')) {
      navigator.clipboard.writeText(cssInput.value);
    } else {
      navigator.clipboard.writeText(jsInput.value);
    }
  });
});
