export const showTaskList = (elements) =>{
    console.log(elements)
    const tableList = document.createElement('table');
    tableList.setAttribute('class', 'wrapper__list');
        elements.forEach( ({ id, title, completed }) => {
          const rowlist = document.createElement('tr');
            const tdId = document.createElement('td');
            tdId.innerHTML = id;
            const tdtitle = document.createElement('td');
            tdtitle.innerHTML = title;
            const tdComplete = document.createElement('td');
            tdComplete.innerHTML = completed;

            rowlist.appendChild(tdId);
            rowlist.appendChild(tdtitle);
            rowlist.appendChild(tdComplete);
            tableList.appendChild(rowlist);
        });
    document.querySelector('#root').appendChild(tableList);
}
