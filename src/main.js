import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';

import Students from './components/Students.vue'
import StudInfo from './components/StudInfo.vue'
import App from './components/App.vue'
import store from './store.js' 

const routes = [
    {path: '/', component: Students},
    {path: '/stud-info/:id', component: StudInfo, props: true}
]

const router = new VueRouter({
    routes
})

    Vue.use( VueAxios, axios)
    Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   el: '#app',
   store,
   router
})
