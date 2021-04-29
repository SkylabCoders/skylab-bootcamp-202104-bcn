const createDomElement = (parent, element, text = null, attributes = []) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (attributes) {
    Object.entries(attributes).map(([attribute, value]) => {
      elementToCreate.setAttribute(attribute, value);
    });
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

describe('Guiven a CreateDomElement function', () => {
  const scenarios = [
    {
      parent: document.createElement('ul'),
      type: 'li',
      text: 'testing',
      attributes: { class: 'myList', id: 'myId' },
      result: '<li class="myList" id="myId">testing</li>',
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with value ${scenarios.parent} and ${scenarios.type} and ${scenarios.text} and ${scenarios.attributes}`, () => {
      test(`Then returns ${scenario.result}`, () => {
        const result = createDomElement(scenarios.parent, scenarios.type, scenarios.text, scenarios.attributes);
        expect(result).toBe(scenario.result);
      });
    });
  });
});
