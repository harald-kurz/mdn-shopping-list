const input = document.querySelector('#item');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

function buttonClicked() {
  const userInput = input.value;
  input.value = '';

  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = userInput;
  button.innerText = 'DELETE';

  ul.appendChild(li);

  button.addEventListener('click', function() {
    let li = this.parentNode;
    li.remove();
  });

  input.focus();
}