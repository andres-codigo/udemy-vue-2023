export default {
	finalCounter(state) {
		return state.counter * 3
	},
	normalisedCounter(_, getters) {
		const finalCounter = getters.finalCounter
		if (finalCounter < 0) {
			return 0
		}
		if (finalCounter > 100) {
			return 100
		}
		return finalCounter
	},
}
