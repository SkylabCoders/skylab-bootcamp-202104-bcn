function createPerson(firstName, secondName) {
  return {
    firstName,
    secondName,
  };
}

let edgar = createPerson("Edgar", "Alandete");
let ruben = createPerson("Ruben");
console.log(edgar);
console.log(ruben);
