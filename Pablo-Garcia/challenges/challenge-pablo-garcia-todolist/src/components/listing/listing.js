import { removeTask } from '../../common/store/actions.js'


export const showTaskList = (elements) =>{
    const tableList = document.createElement('table');
    tableList.setAttribute('class', 'wrapper__list');
        elements.forEach( ({ title, completed }, index) => {
          const rowlist = document.createElement('tr');
          const tdtitle = document.createElement('td');
          tdtitle.innerHTML = title;
          const tdComplete = document.createElement('td');
          tdComplete.innerHTML = completed;

          const deleteButton = document.createElement('button');
          deleteButton.addEventListener('click', () => removeTask(index));
          deleteButton.innerText = 'Delete';

          rowlist.appendChild(tdtitle);
          rowlist.appendChild(tdComplete);
          tableList.appendChild(rowlist);
          tableList.appendChild(deleteButton);
    });
  document.querySelector('#tasks').innerHTML = "";
  document.querySelector('#tasks').appendChild(tableList);
}
