const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
};

let matrix = createNewMatrix(5, 5);
console.log('matrix', matrix);
let newCells = [...matrix];

const replaceCells = (index1, index2) => {
    newCells[index1][index2] = 1;
}

const createOriginalBlinker = () => {
    replaceCells(1, 2);
    replaceCells(2, 2);
    replaceCells(3, 2);
}
createOriginalBlinker();
console.log('originalBlinker', newCells);












// const originBlinker = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0]
// ];

// const newBlinker = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ]

// const numOfNeighbours = () => {
//     let index = 0;
//     let subIndex = 0;
//     let position = originBlinker[index][subIndex];

//     originBlinker.forEach

// }
// numOfNeighbours();




// /* ------------------------------ */

// function playBlinker(originBlinker) {
//     originBlinker.forEach((position) => {
//         position.map((subPosition) => {
//             numOfNeighbours();
//             stateOfNeighbours();
//             return newBlinker;
//         })
//     })
// };




