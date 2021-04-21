describe('Given a getHeroe function', () => {
  const scenarios = [{
    parameter: 'heroeNAME',
    location: 'www.anything.com/?heroeID=1&heroeNAME=A-Bomb',
    result: 'A-Bomb',
  },
  {
    parameter: 'heroeCITY',
    location: 'www.anything.com/?heroeID=1&heroeNAME=A-Bomb&heroeCITY=Gotham',
    result: 'Gotham',
  },

  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with value ${scenario.parameter} and value ${scenario.location}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const finalRes = getHeroe(scenario.parameter, scenario.location);
        expect(finalRes).toBe(scenario.result);
      });
    });
  });
});

function getHeroe(param, location) {
  const params = new URLSearchParams(location);
  return params.get(param);
}
