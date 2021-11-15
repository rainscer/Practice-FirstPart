import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import AllWeather from './components/AllWeather.vue'
import Weather from './components/Weather.vue'
import App from './components/App.vue'
    
const routes = [
    {path: '/', component: AllWeather},
    {path: '/weather-info/:city', component: Weather, props: true}
]

const router = new VueRouter({
    routes
})

    Vue.use( VueAxios, axios)
    Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   el: '#app',
   router
})
