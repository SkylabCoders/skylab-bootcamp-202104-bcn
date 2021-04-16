const originBlinker = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]
const newBlinker = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]



function playBlinker(originBlinker) {
    originBlinker.forEach((position) => {
        position.map((subPosition) => {
            numOfNeighbours();
            stateOfNeighbours();
            return newBlinker;
        })
    })
};






describe('Given a playBlinker function', () => {
    const scenarios = [
        {
            originArray: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            operation: (x) => x > 2,
            newBlinker: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
        },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray}`, () => {
            test(`Then return a new array ${scenario.newBlinker}`, () => {
                // Arrange
                // Act 
                const result = playBlinker(scenario.originArray, scenario.operation);
                // Assert
                expect(newBlinker).toStrictEqual(scenario.newBlinker);
            })
        })
    })
})
