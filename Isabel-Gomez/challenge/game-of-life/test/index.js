const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
};
let matrix = createNewMatrix(5, 5);




const originBlinker = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];

const newBlinker = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const numOfNeighbours = () => {
    let index = 0;
    let subIndex = 0;
    let position = originBlinker[index][subIndex];
    console.log('primera', position);

    originBlinker.forEach

}
numOfNeighbours();




/* ------------------------------ */

function playBlinker(originBlinker) {
    originBlinker.forEach((position) => {
        position.map((subPosition) => {
            numOfNeighbours();
            stateOfNeighbours();
            return newBlinker;
        })
    })
};




