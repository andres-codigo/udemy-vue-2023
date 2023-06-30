const app = Vue.createApp({
	data() {
		return {
			enteredTaskValue: '',
			tasks: [],
			tasksListIsVisible: true,
		}
	},
	computed: {
		buttonCaption() {
			return this.tasksListIsVisible ? 'Hide' : 'Show List'
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredTaskValue)
		},
		toggleTasksVisibility() {
			this.tasksListIsVisible = !this.tasksListIsVisible
		},
	},
})

app.mount('#assignment')
