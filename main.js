const xmlns = 'http://www.w3.org/2000/svg';
const xlinkns = 'http://www.w3.org/1999/xlink';

const date = new Date();
/* console.log(date.getTime() + ' ' + date.getFullYear() + ' ' + date); */

const dateDom = document.getElementById('pDate');
const contItems = document.getElementById('contList');

dateDom.innerHTML = date;

let arrItems = [];
const addItem = (itemText) => {
  // TODO: implement
  arrItems.push(itemText);
  addItemFromInput(itemText);
};

const addItemFromInput = (itemtext = '') => {
  // TODO: implement
  let div = document.createElement('div');
  div.className = 'alignCheckBoxList';
  contItems.appendChild(div);
  let input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'checkBoxStyle';
  input.value = itemtext;
  input.id = itemtext;
  let label = document.createElement('label');
  label.htmlFor = itemtext;
  label.innerText = itemtext;
  div.appendChild(input);
  div.appendChild(label);
};

addEventListener('load', () => {
  addItem('Read the description');
  addItem('Solve the task');
  addItem('Submit the solution');
  console.log(arrItems);
  arrItems.forEach((element) => {});

  document.querySelector('.todo__input').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const textAreaInput = document.getElementById('textAreaInput');

      addItemFromInput(textAreaInput.value);
      textAreaInput.value = '';
    }
  });

  document.querySelector('.todo__create').addEventListener('click', () => {
    const textAreaInput = document.getElementById('textAreaInput');

    if (textAreaInput.value !== '') {
      addItemFromInput(textAreaInput.value);
      textAreaInput.value = '';
    } else {
      alert('Please enter something on textarea.');
    }
  });
});
