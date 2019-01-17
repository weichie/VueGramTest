import Dashboard from './components/Dashboard.vue';
import Login from './components/auth/Login.vue';
import Settings from './components/Settings.vue';

export const routes = [
	{
		path: '*',
		redirect: '/dashboard'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
		meta: {
			requiresAuth: true
		}
	}
];