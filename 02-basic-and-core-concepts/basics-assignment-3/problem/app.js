const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			result: '',
		}
	},
	watch: {
		counter(value) {
			if (value < 37) {
				this.result = 'Not there yet'
			} else if (value > 37) {
				this.result = 'Too much!'
			}
			const that = this
			setTimeout(() => {
				that.counter = 0
			}, 5000)
		},
	},
	// computed: {
	// 	fullname() {
	// 		console.log('Running again...')
	// 		if (this.name === '' || this.lastName === '') {
	// 			return ''
	// 		}
	// 		return this.name + ' ' + this.lastName
	// 	},
	// },
	methods: {
		// setName(event) {
		// 	this.name = event.target.value
		// },
		add(num) {
			this.counter = this.counter + num
		},
	},
})

app.mount('#assignment')
