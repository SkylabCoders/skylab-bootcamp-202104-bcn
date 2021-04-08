const CARD_LENGTH = 15
const POINTS = 100
let playing = true
let username = undefined
let turn = 0
let card = []
let points = POINTS
let numbersLeft = CARD_LENGTH
let cardNumbersFounded = []
let foundedNumbers = []
let matchedNumbers = []
let linesCompleted = 0
let line1Complete = false
let line2Complete = false
let line3Complete = false

// getNumber
const getNumber = () => {
	return (Math.random() * (15 - 1) + 1).toFixed(0)
}

// isNumberRepeated
const isNumberRepeated = (numb, arr) => {
	return arr.includes(numb)
}

//getCard
const getCard = () => {
	let validNumber = false
	let newNumber = null
	let lineNumber = null

	for (let i = 0; i < CARD_LENGTH; i++) {
		if (i < 5) {
			lineNumber = 1
		}
		if (i >= 5 && i < 10) {
			lineNumber = 2
		}
		if (i >= 10) {
			lineNumber = 3
		}

		while (validNumber === false) {
			newNumber = getNumber()

			if (!isNumberRepeated(newNumber, cardNumbersFounded)) {
				cardNumbersFounded.push(newNumber)
				validNumber = true
			}
		}

		validNumber = false

		let newNumberObj = {
			number: newNumber,
			matched: false,
			lineNumber: lineNumber
		}
		card.push(newNumberObj)
	}
}

// showCard
const showCard = () => {
	let firstLine = '| '
	let secondLine = '| '
	let thirdLine = '| '

	for (let i = 0; i < card.length; i++) {
		let number
		if (card[i].matched === true) {
			number = 'X'
		} else {
			number = card[i].number
		}
		if (i < 5) {
			firstLine = firstLine + number + ' | '
		}
		if (i >= 5 && i < 10) {
			secondLine = secondLine + number + ' | '
		}
		if (i >= 10) {
			thirdLine = thirdLine + number + ' | '
		}
	}
	console.log(' ................... ')
	console.log(firstLine)
	console.log(' ................... ')
	console.log(secondLine)
	console.log(' ................... ')
	console.log(thirdLine)
}

// showMatchedNumbers

const showMatchedNumbers = () => {
	let numbers = ''

	matchedNumbers.forEach((item) => {
		numbers = numbers + item + ' '
	})
	console.log('Matched numbers: ', numbers)
}

// showFoundedNumbers

const showFoundedNumbers = () => {
	let numbers = ''

	foundedNumbers.forEach((item) => {
		numbers = numbers + item + ' '
	})
	console.log('Founded numbers: ', numbers)
}

// matchNumbers

const matchNumbers = (number) => {
	let newCard = card.map((item) => {
		if (item.number === number && item.matched === false) {
			matchedNumbers.push(number)
			return { ...item, matched: true }
		}
		return item
	})
	card = [...newCard]
}

//countNumbersLeft

const countNumbersLeft = () => {
	let countedNumbers = 0
	card.forEach((item) => {
		if (item.matched === true) {
			countedNumbers++
		}
	})
	countedNumbers = CARD_LENGTH - countedNumbers
}

//verifyLines

const verifyLines = () => {
	let line1LeftNumbers = 5
	let line2LeftNumbers = 5
	let line3LeftNumbers = 5

	card.forEach((item) => {
		if (item.matched === true) {
			switch (item.lineNumber) {
				case 1:
					line1LeftNumbers--
					break
				case 2:
					line2LeftNumbers--
					break
				case 3:
					line3LeftNumbers--
					break

				default:
					break
			}
		}
	})

	if (line1Complete === false && line1LeftNumbers === 0) {
		line1Complete = true
		linesCompleted++
		console.log('New line completed  =)')
	}

	if (line2Complete === false && line2LeftNumbers === 0) {
		line2Complete = true
		linesCompleted++
		console.log('New line completed  =)')
	}

	if (line3Complete === false && line3LeftNumbers === 0) {
		line3Complete = true
		linesCompleted++
		console.log('New line completed  =)')
	}
}

//askToContinue

const askToContinue = () => {
	let newAction = window.confirm('¿Do you want a new number?')
	let newNumber = getNumber()
	foundedNumbers.push(newNumber)

	if (newAction === false) {
		playing = false
	} else {
		turn++
		points--
		console.log('holas')

		matchNumbers(newNumber)
		countNumbersLeft()
		console.clear()
		console.log(' ******************* ')
		console.log('Found number: ', newNumber)
		verifyLines()
		console.log(' ******************* ')
		console.log('Turn: ', turn)
		showFoundedNumbers()
		showMatchedNumbers()
		console.log('Numbers left: ', numbersLeft)
		console.log('Points: ', points)
		console.log(' ')

		//validNumber = false
		showCard()

		if (numbersLeft === 0) {
			console.log('You win!')
			playing = false
		}
		if (points === 0) {
			console.log('You loose!')
			playing = false
		}
	}
}

//askToPlayAgain
const askToPlayAgain = () => {
	let playAgain = confirm('¿Do you want to play again?')
	if (playAgain) {
		console.clear()
		playing = true
		turn = 0
		card = []
		points = POINTS
		numbersLeft = CARD_LENGTH
		cardNumbersFounded = []
		foundedNumbers = []
		matchedNumbers = []
		linesCompleted = 0
		line1Complete = false
		line2Complete = false
		line3Complete = false

		bingo()
	} else {
		console.log('Thank you for playing Bingo!')
	}
}

// bingo
const bingo = () => {
	while (!username) {
		console.log('¡Welcome to Bingo!')
		username = prompt('¿Your name?')
	}
	if (username) {
		console.log('Hi, ', username)
		console.log('Here is your Bingo card:')
		getCard()
		showCard()
		while (playing === true) {
			askToContinue()
		}
	}

	askToPlayAgain()
}

//main
bingo()
