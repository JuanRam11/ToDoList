const xmlns = 'http://www.w3.org/2000/svg';
const xlinkns = 'http://www.w3.org/1999/xlink';

const date = new Date();
/* console.log(date.getTime() + ' ' + date.getFullYear() + ' ' + date); */

const dateDom = document.getElementById('pDate');

dateDom.innerHTML = date;
const addItem = (itemText) => {
  // TODO: implement
};

const addItemFromInput = () => {
  // TODO: implement
};

addEventListener('load', () => {
  addItem('Read the description');
  addItem('Solve the task');
  addItem('Submit the solution');

  document.querySelector('.todo__input').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addItemFromInput();
    }
  });

  document
    .querySelector('.todo__create')
    .addEventListener('click', () => addItemFromInput());
});
