export const BLINKER_BUTTON = document.getElementsByClassName(
	'game-footer__buttons--blinker'
)[0]
export const sapoButton = document.getElementsByClassName(
	'game-footer__buttons--sapo'
)[0]

export const generateTable = (array) => {
	let table = '<table><tr><td>Game Of Life</td>'
	for (let i = 0; i < array.length; i++) {
		table += '<table><tr><td></td>'
		for (let j = 0; j < array[i].length; j++) {
			table += '<td>' + array[i][j] + '</td>'
		}
	}
	table += '</table>'
	let siteTable = document.getElementById('app')
	siteTable.innerHTML = table
}

export const gameOfLifeBlinker = () => {
	let reset = document.getElementById('app')
	// reset.innerHTML = "";
	const matriz = createMatriz(arrayHeight, arrayRows, 0)
	const matrizVertical = createVerticalBlock(2, 2, matriz, directionBlinker)
	let newArray = searchAlives(matrizVertical)
	// playButton.addEventListener("click", generateTable(newArray));
	generateTable(newArray)
	newArray = searchAlives(newArray)
	setTimeout(() => generateTable(newArray), 1000)
}
