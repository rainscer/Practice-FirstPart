<template>
   <div class="main">
    <div class="block">   
        <div class="head">  
            <div>
                <h2 class="title">City:</h2>  
            </div>
            <div>
                <h2>{{weather.name}} <img :src='"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + weather.sys.country + ".svg"'></h2>                
            </div>     
        </div>

            <div class="card">
                <h2>Weather </h2>
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
        </div>            
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        city: '',
    },
    data: function() {
        return {
            weather: [],
            API_KEY: '0e46206d6a6297fcc13660833176ccc9',
            URL: "http://api.openweathermap.org/data/2.5/weather?",
        }
    },
    mounted: function(){
        axios.get(`${this.URL}q=${this.city}&appid=${this.API_KEY}`)
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
    },
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
</style>