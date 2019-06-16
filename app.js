const button = document.querySelector('.copy');
const input = document.querySelector('.comando');
const message = document.querySelector('#mensaje');

button.addEventListener('click', function () {
   input.focus();
   document.execCommand('selectAll');
   document.execCommand('copy');

   message.innerHTML = 'Comando Copiado';
   setTimeout(() => message.innerHTML = '', 4000);


})