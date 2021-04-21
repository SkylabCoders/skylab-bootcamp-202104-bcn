function createList(name) {
  const ulElement = document.getElementById('list-container');
  const listElement = document.createElement('li');
  const anchorElement = document.createElement('a');
  anchorElement.href = `./../html/pokemon-details.html?name=${name}`;
  anchorElement.innerText = name;
  listElement.setAttribute('id', `id-${name}`);
  ulElement.append(listElement);
  listElement.append(anchorElement);
}

const setAtributes = (ulID, atribute) => {
  const ulAbilities = document.getElementById(ulID);
  const liAbilities = document.createElement('li');
  liAbilities.setAttribute('id', `atribute-${atribute}`);
  liAbilities.innerText = atribute;
  ulAbilities.append(liAbilities);
};

const setTitlePokemon = (name) => {
  const pokeName = document.getElementById('pokemon-name');
  pokeName.innerText = name;
};

const setTable = (nameStat, valueStat) => {
  const table = document.getElementById('stats');
  const tRow = document.createElement('tr');
  tRow.setAttribute('id', nameStat);

  const tdName = document.createElement('td');
  tdName.innerText = nameStat;
  const tdValue = document.createElement('td');
  tdValue.innerText = valueStat;

  tRow.append(tdName);
  tRow.append(tdValue);

  table.append(tRow);
};
