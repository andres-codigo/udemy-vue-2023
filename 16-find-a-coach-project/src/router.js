import { createRouter, createWebHistory } from 'vue-router'

// Coaches
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'

// Requests
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'

// Misc
import NotFound from './pages/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/coaches' },
		{ path: '/coaches', component: CoachesList },
		{
			path: '/coaches/:id',
			component: CoachDetail,
			props: true,
			children: [
				{ path: 'contact', component: ContactCoach }, // /coaches/c1/contact
			],
		},
		{ path: '/register', component: CoachRegistration },
		{ path: '/requests', component: RequestsReceived },
		{ path: '/:notFound(.*)', component: NotFound }, // catch all/invalid url
	],
})

export default router
