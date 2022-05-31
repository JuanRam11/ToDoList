const xmlns = 'http://www.w3.org/2000/svg';
const xlinkns = 'http://www.w3.org/1999/xlink';

const date = new Date();

const dateDom = document.getElementById('pDate');
const contItems = document.getElementById('contList');
let container;
let deleteItem;

dateDom.innerHTML = date;

let arrItems = [];
const addItem = (itemText) => {
  // TODO: implement
  arrItems[0] = '0';
  arrItems.push(itemText);
  let indexItem = arrItems.indexOf(itemText);
  addItemFromInput(itemText, indexItem);
};

const addItemFromInput = (itemtext = '', indexItem) => {
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
  deleteItem = document.createElement('input');
  deleteItem.type = 'button';
  deleteItem.value = 'Delete';
  deleteItem.classList.add('deleteButton', 'deleteButtonClick');
  console.dir(deleteItem);

  div.appendChild(input);
  div.appendChild(label);
  //div.appendChild(deleteItem);
};

addEventListener('load', () => {
  addItem('Read the description');
  addItem('Solve the task');
  addItem('Submit the solution');

  document.querySelector('.todo__input').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      enterInput();
    }
  });

  document.querySelector('.todo__create').addEventListener('click', () => {
    enterInput();
  });

  deleteItem.addEventListener('click', () => {
    console.log(indexItem);
    arrItems.splice(indexItem, 1);
    container = document.querySelector(`#contList :nth-child(${indexItem})`);
    container.remove();
    console.dir(container);
  });
});

const enterInput = () => {
  const textAreaInput = document.getElementById('textAreaInput');

  if (textAreaInput.value !== '') {
    addItemFromInput(textAreaInput.value);
    arrItems.push(textAreaInput.value);

    textAreaInput.value = '';
  } else {
    textAreaInput.placeholder = 'Type something';
    textAreaInput.style = 'background-color:#DCDF28';

    setTimeout(() => {
      textAreaInput.style = 'background-color:none';
      textAreaInput.placeholder = 'What should I do...';
    }, 1000);
  }
};
