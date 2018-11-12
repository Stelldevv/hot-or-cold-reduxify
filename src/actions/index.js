export const RESET_GAME = 'RESET_GAME';
export const resetGame = {
	type: RESET_GAME,
	guesses: [],
	feedback: 'Make your guess!',
	auralStatus: '',
	correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
	type: MAKE_GUESS,
	guess
})

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = (guesses, feedback) => ({
	type: AURAL_UPDATE,
	guesses,
	feedback
});