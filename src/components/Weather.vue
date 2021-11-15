<template>
   <div >

    <div class="myWeatherBlock">   
        <h2 class="blockName">Searched Location</h2>     
        <div class="myWeatherHeader">            
            <h2>{{weather.name}}</h2>
            <img :src='"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + weather.sys.country + ".svg"'>
            <h2>[ {{weather.coord.lon}} | {{weather.coord.lat}} ]</h2>
        </div>
        <div class="infoCardList">
            <div class="card">
                <h3>Weather </h3>
                <p>Main: {{weather.weather[0].main}}</p>
                <p>Description: {{weather.weather[0].description}}</p>
            </div>

            <div class="card">
                <h3>Temperature </h3>
                <p>Temperature: {{weather.main.temp}} °C</p>
                <p>Feels like: {{weather.main.feels_like}} °C</p>
                <p>Today: {{weather.main.temp_min}} °C - {{weather.main.temp_max}} °C</p>
                <p></p>
            </div>

            <div class="card">
                <h3>Wind </h3>
                <p>Speed: {{weather.wind.speed}} m/s</p>
                <p>Deg: {{weather.wind.deg}}°</p>
            </div>

            <div class="card">
                <h3>Air indicators </h3>
                <p>Pressure: {{weather.main.pressure}} hpa</p>
                <p>Humidity: {{weather.main.humidity}} %</p>
            </div>

            <div class="card">
                <h3>About </h3>
                <p>Country: {{weather.sys.country}}</p>
                <p>Sunrise: {{weather.sys.sunrise}}</p>
                <p>Sunset: {{weather.sys.sunset}}</p>
                <p>Timezone: {{weather.timezone}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

export default {
    props: {
        city: '',
    },
    data: function() {
        return {
            weather: [],
            API_KEY: '9928019ae35559d6d2cc2bf478ceead0',
            link: "http://api.openweathermap.org/data/2.5/weather?",
        }
    },
    mounted: function(){
        Vue.axios.get(`${this.link}q=${this.city}&appid=${this.API_KEY}`)
            .then( res => {
                this.weather = res.data;
                console.log(`${this.link}${this.myLocation}&appid=${this.API_KEY}`)
            })
            .then(() => {
                this.weather.main.temp -= 273.15;
                this.weather.main.temp = this.weather.main.temp.toFixed(1);
                this.weather.main.feels_like -= 273.15;
                this.weather.main.feels_like = this.weather.main.feels_like.toFixed(1);
                this.weather.main.temp_max -= 273.15;
                this.weather.main.temp_max = this.weather.main.temp_max.toFixed(1);
                this.weather.main.temp_min -= 273.15;
                this.weather.main.temp_min = this.weather.main.temp_min.toFixed(1);
                let date = new Date(this.weather.sys.sunrise *1000);
                let hours = date.getHours() + this.weather.timezone/3600;
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                this.weather.sys.sunrise = `${hours}:${minutes}:${seconds}`
                
                date = new Date (this.weather.sys.sunset * 1000)
                hours = date.getHours() + this.weather.timezone/3600;
                minutes = date.getMinutes();
                seconds = date.getSeconds();
                this.weather.sys.sunset = `${hours}:${minutes}:${seconds}`                  
                this.weather.timezone = `UTC${this.return_char()}${this.weather.timezone/3600}`
            })
    },
}
</script>