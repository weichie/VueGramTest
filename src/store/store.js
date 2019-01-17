import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Authstore from './modules/authstore'

export default new Vuex.Store({
	modules: {
		Authstore
	}
})