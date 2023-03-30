const box = document.querySelector('#box');
const target = document.querySelector('#target');

box.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', box.id);
});

target.addEventListener('dragenter', (e) => {
  e.preventDefault();
});

target.addEventListener('dragover', (e) => {
  e.preventDefault();
});

target.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  console.log(data) // get id of box
  const draggedElement = document.querySelector('#' + data);
  e.target.appendChild(draggedElement);
});