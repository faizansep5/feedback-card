const textArea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', () => {
  alert(textArea.value);
  textArea.value = '';
});
