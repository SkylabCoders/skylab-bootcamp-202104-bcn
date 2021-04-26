function createI() {
  const userInput = document.getElementById('input').value;
  createItems(userInput);
  document.getElementById('input').value = '';
}

function deleteItemsList() {
  const taskList = document.querySelectorAll('.tasks');
  const clear
  for (let index = 0; index < taskList.length; index + 1) {
    taskList[index].addEventListener('click', () => {
      this.classList.toggle('active');
    });
    taskList[index].querySelector('button').addEventListener('click', () => {
      this.closest('.tasks').remove();
      clear = this.closest('.tasks').textContent;
    });
  }
  deleteItems(clear);
}
