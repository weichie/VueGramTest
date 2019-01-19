import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase';

const fb = require('./firebaseConfig.js');

import store from './store/store'
import { routes } from './routes'

Vue.config.productionTip = false

import './assets/app.scss'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
	const currentUser = firebase.auth().currentUser;

	if(requiresAuth && !currentUser){
		next('/login');
	}else if(requiresAuth && currentUser){
		next();
	}else{
		next();
	}
})

let app
fb.auth.onAuthStateChanged(user => {
	if (!app) {
		app = new Vue({
			el: '#app',
			router,
			store,
			render: h => h(App)
		})
	}
})