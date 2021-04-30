const createElement = (element, text, href, parent, id) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

describe('Given a funcion createElement', () => {
  const scenarios = [{
    element: li,
    text: 'hola',
    href: null,
    parent: main,
    id: 'main__header',
    results: (li, 'hola', null, main, 'main__header')
  }];
});
scenarios.forEach((scenario) => {
  describe(`When invoked with values ${scenarios.element}, ${scenarios.text}, ${scenarios.href}, ${scenarios.parent} and ${scenarios.id}`, () => {
    test(`Then return ${scenarios.results}`, () => {
      const result = createElement(scenarios.element, scenarios.text, scenarios.href, scenarios.parent, scenarios.id);
      expect(result).toStrictEqual(scenario.results);
    });
  });
});
