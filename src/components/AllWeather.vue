<template>
    <div class="main">
        <button class="editTheme btn-edit">Edit</button>
    <div class="block">               
        <div class="head">  
            <div>
                <h2 class="title">Your Location</h2>  
            </div>
            <div>
                <h2>{{weather.name}} <img :src='"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + weather.sys.country + ".svg"'></h2>                
            </div>     
        </div>
   
            <div class="card">
                <h2>Information About Weather In Your City: </h2>
                <p>Main: {{weather.weather[0].main}}</p>
                <p>Description: {{weather.weather[0].description}}</p>
                <p>Temperature: {{weather.main.temp}} °C</p>
                <p>Feels like: {{weather.main.feels_like}} °C</p>
                <p>Today: {{weather.main.temp_min}} °C - {{weather.main.temp_max}} °C</p>
                <p>Speed: {{weather.wind.speed}} m/s</p>
                <p>Deg: {{weather.wind.deg}}°</p>
                <p>Pressure: {{weather.main.pressure}} hpa</p>
                <p>Humidity: {{weather.main.humidity}} %</p>
                <p>Sunrise: {{weather.sys.sunrise}}</p>
                <p>Sunset: {{weather.sys.sunset}}</p>
                <p>Timezone: {{weather.timezone}}</p>
            </div>
            <h2 class="title">Enter City For Search</h2>     
            <div class="search">
                <div class="add">
                    <input type="text" v-model="inputCity">
                    <router-link  :to="'/weather-info/'+inputCity" ><button > SeArCh </button></router-link>
                </div>
            </div>
        </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
    data: function() {
        return {
            API_KEY: '0e46206d6a6297fcc13660833176ccc9',
            URL: "http://api.openweathermap.org/data/2.5/weather?",
            myLocation: 'Zaporizhzhia',
            weather: [],
            myLocationlatitude: '',
            myLocationlongitude: '',
            inputCity: '',
            allCity: [],
        }
    },
    mounted:  function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.myLocationlatitude = `${position.coords.latitude}`
                this.myLocationlongitude = `${position.coords.longitude}`
                axios.get(`${this.URL}lat=${this.myLocationlatitude}&lon=${this.myLocationlongitude}&appid=${this.API_KEY}`)
                    .then( res => {
                        this.weather = res.data;
                        console.log(`${this.URL}${this.myLocation}&appid=${this.API_KEY}`)
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
    .main{
        width: 100%;
        margin: 0 auto;

    }
    .block{
        margin: 0 auto;
        width: 70%;
        margin-top: 100px;
        background: rgba(255, 255, 255, 0.26);
        padding: 10px 20px;
        border-radius: 15px;
        box-shadow: 5px 5px 10px#000;
    }
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .block h2{
        font-weight: normal;
        text-align: center;
    }
    .head img{
        position: relative;
        width: 25px;
        height: 25px;
    }
    .search{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .search input{
        width: 50%;
        height: 30px;
        border-radius: 15px;
        padding: 5px 10px;
    }
    .search button{
        height: 40px;
        width: 100px;
        border-radius: 15px;
        background: lightblue;
    }
    .card{
        width: 30%;
        background: lightblue;
        border-radius: 20px;
        padding: 20px 40px;
        margin: 20px auto;
        box-shadow: 10px 10px 20px #000;
        text-align: center;
    }
    .block h2{
        font-weight: bold;
    }
    .editTheme{
        height: 40px;
        width: 100px;
        margin: 20px 50px;
        border-radius: 5px ;
        background: cornflowerblue;
        color: #fff;
        font-size: 18px;
    }
    .dark{
        color: white;
    }
    .light{
        color:black;
    }
</style>