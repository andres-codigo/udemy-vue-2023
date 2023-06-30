const app = Vue.createApp({
	data() {
		return {
			name: 'Dre',
			age: 20,
			image:
				'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1048&q=80',
		}
	},
	methods: {
		newAge() {
			return this.age + 5
		},
		getRandomArbitrary() {
			return Math.random()
		},
	},
})

app.mount('#assignment')
