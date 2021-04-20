export function vBlinker_positions_factory(row, column) {
	let positions = [
		[row - 1, column],
		[row, column],
		[row + 1, column]
	]
	return positions
}

export function sapo_positions_factory(row, column) {
	let positions = [
		[row - 1, column],
		[row + 1, column],
		[row, column],
		[row, column - 1],
		[row + 1, column - 1],
		[row + 2, column - 1]
	]
	return positions
}
