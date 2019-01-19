<template>
    <div id="login">
        <section>
            <div class="col1">
                <h1>Vuegram</h1>
                <p>Welcome to the <a href="https://savvyapps.com/" target="_blank">Savvy Apps</a> sample social media web app powered by Vue.js and Firebase.
                    Build this project by checking out The Definitive Guide to Getting Started with Vue.js</p>
            </div>
            <div class="col2">
                <form @submit.prevent>
                    <h1>Welcome Back</h1>

                    <label for="email1">Email</label>
                    <input type="text" v-model.trim="loginForm.email" placeholder="you@email.com" id="email1" />

                    <label for="password1">Password</label>
                    <input type="password" v-model.trim="loginForm.password" placeholder="******" id="password1" />

                    <button class="button" @click="login">Log In</button>

                    <div class="extras">
                        <a>Forgot Password</a>
                        <a>Create an Account</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
	import fb from '../../firebaseConfig.js';

	export default{
		data(){
			return{
				loginForm: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			login(){
				fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
					this.$store.commit('setCurrentUser', user);
					this.$store.dispatch('fetchUserProfile');
					this.$router.push('/dashboard');
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>