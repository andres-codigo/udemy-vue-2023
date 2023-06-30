const app = Vue.createApp({
	data() {
		return {
			output: '',
			confirmedOutput: '',
			confirmedOutput: '',
		}
	},
	methods: {
		showMessage() {
			alert('Message')
		},
		confirmInput() {
			this.confirmedOutput = this.output
		},
		setName(event) {
			this.output = event.target.value
		},
	},
})

app.mount('#assignment')
