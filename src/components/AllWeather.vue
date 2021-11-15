<template>
    <div class="contentWeatherMain">

    <div class="myWeatherBlock">   
        <h2 class="blockName">Your Location</h2>     
        <div class="myWeatherHeader">            
            <h2>{{weather.name}}</h2>
            <img :src='"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + weather.sys.country + ".svg"'>
            <h2>[ {{weather.coord.lon}} | {{weather.coord.lat}} ]</h2>
        </div>
        <div class="infoCardList">
            <div class="card">
                <h3>Weather <img src="/img/sun.png"></h3>
                <p>Main: {{weather.weather[0].main}}</p>
                <p>Description: {{weather.weather[0].description}}</p>
            </div>

            <div class="card">
                <h3>Temperature <img src="/img/temperature.png"></h3>
                <p>Temperature: {{weather.main.temp}} °C</p>
                <p>Feels like: {{weather.main.feels_like}} °C</p>
                <p>Today: {{weather.main.temp_min}} °C - {{weather.main.temp_max}} °C</p>
                <p></p>
            </div>

            <div class="card">
                <h3>Wind <img src="/img/wind.png"></h3>
                <p>Speed: {{weather.wind.speed}} m/s</p>
                <p>Deg: {{weather.wind.deg}}°</p>
            </div>

            <div class="card">
                <h3>Air indicators <img src="/img/humidity.png"></h3>
                <p>Pressure: {{weather.main.pressure}} hpa</p>
                <p>Humidity: {{weather.main.humidity}} %</p>
            </div>

            <div class="card">
                <h3>About <img src="/img/about.png"></h3>
                <p>Country: {{weather.sys.country}}</p>
                <p>Sunrise: {{weather.sys.sunrise}}</p>
                <p>Sunset: {{weather.sys.sunset}}</p>
                <p>Timezone: {{weather.timezone}}</p>
            </div>
        </div>
    </div>

    <div class="myWeatherBlock">
        <h2 class="blockName">Do you need the weather of another city? Find it!</h2>     
        <div class="searchWeather">
            <div class="add">
                <input type="text" v-model="cityInput">
                <router-link  :to="'/search-weather/'+cityInput" ><button :disabled="cityInput != '' ? none : 'disabled'"> SEARCH </button></router-link>
            </div>
        </div>
    </div>

 

</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
export default {
    data: function() {
        return {
            API_KEY: '9928019ae35559d6d2cc2bf478ceead0',
            link: "http://api.openweathermap.org/data/2.5/weather?",
            myLocation: 'Zaporizhzhia',
            weather: [],
            myLocationlatitude: '',
            myLocationlongitude: '',
            cityInput: '',
            cityList: [],
        }
    },
    mounted:  function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.myLocationlatitude = `${position.coords.latitude}`
                this.myLocationlongitude = `${position.coords.longitude}`
                console.log(`${this.myLocationlatitude} | ${this.myLocationlongitude}`)
                axios.get(`${this.link}lat=${this.myLocationlatitude}&lon=${this.myLocationlongitude}&appid=${this.API_KEY}`)
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
            })  
        } 
        else {
            alert("Geolocation is not supported by this browser.");
        }
             
    },
    methods: {
        return_char: function(){
            if (this.weather.timezone/3600 >= 0) {
                return "+"
            }
            else{
                return "-"
            }
        },
        getLocation: function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        },
        showPosition: function(position) {
            this.myLocationlatitude = `${position.coords.latitude}`
            this.myLocationlongitude = `${position.coords.longitude}`
            console.log(`${this.myLocationlatitude} | ${this.myLocationlongitude}`)
        },
            
    }
}
</script>

<style scoped>
    .contentWeatherMain{
        width: 100%;
        margin: 0 auto;
    }
    .myWeatherBlock{
        margin: 0 auto;
        width: 80%;
        margin-top: 20px;
        background: rgba(76, 64, 121, 0.6);
        border-radius: 10px;
        padding: 10px 20px;
    }
    .myWeatherHeader{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid #fff;
    }
    .myWeatherBlock h2.blockName{
        font-weight: normal;
        width: 100%;
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
        margin-bottom: 10px;
        text-align: center;
    }
    .myWeatherHeader h2{
        font-weight: normal;
    }
    .myWeatherHeader img{
        width: 30px;
        height: 30px;
        margin-right: auto;
        margin-left: 20px;
    }
    .searchWeather{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .searchWeather input{
        width: 500px;
        height: 30px;
        border: none;
        padding: 0 10px;
        margin: 0 10px;
        background: rgb(105, 88, 167);
        border-radius: 10px;
        color: #fff;
        font-size: 18px;
    }
    .searchWeather button{
        border: none;
        height: 30px;
        width: 150px;
        border-radius: 10px;
        background: rgb(83, 182, 79);
        color: #fff;
        font-weight: 600;
    }
    .searchWeather button:hover{
        cursor: pointer;
    }
    .add,.search{
        display: flex;
        align-items: center;
        margin: 5px 0;
    }
    /* -------------------- */
    .infoCardList{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .card{
        width: 28%;
        background: rgb(105, 88, 167);
        border-radius: 10px;
        padding: 10px 20px;
        min-height: 75px;
        position: relative;
        margin: 10px auto;
    }
    .card h3{
        font-weight: normal;
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
        margin-bottom: 5px;
        font-size: 20px;
    }
    .card p{
        padding-top: 3px;
    }
    .card img{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 12px;
        right: 20px;
    }
</style>