<template>
  <div id="app">
    <div id="nav"></div>

    <div class="container">
      <div class="weather-side">
        <div class="weather-gradient">
          <div class="date-container">
            <h2 class="date-dayname">Tuesday</h2>
            <span class="date-day">{{ toDayDate() }}</span>
            <i class="location-icon" data-feather="map-pin"></i>
            <span class="location">{{ current.name }}, {{ current.sys.country}}</span>
          </div>
          <div class="weather-container">
            <i class="weather-icon" data-feather="sun"></i>
            <h1 class="weather-temp"> {{ Math.round(current.main.temp) }}°C</h1>
            <h3 class="weather-desc"> {{ current.weather[0].main }}</h3>
          </div>

        </div>
      </div>
      <div class="info-side">
        <div class="today-info-container">
          <div class="today-info">
            <div class="precipitation"> 
              <span class="title"> Pressure</span>
              <span class="value">{{ current.main.pressure }} hpa</span>
              <div class="clear"></div>
            </div>
            <div class="humidity">
              <span class="title"> HUMIDITY</span>
              <span class="value"> {{ current.main.humidity }} %</span>
              <div class="clear"></div>
            </div>
            <div class="wind">
              <span class="title"> WIND</span>
              <span class="value"> {{ current.wind.speed }} m/s</span>
              <div class="clear"></div>
            </div>
          </div>
        </div>

        <div class="location-container">
            <span class="title"><b>Change Location</b></span><br><br>
            <select v-model="selected_city">
                <option v-for="city in city_list" :key="city">{{ city }}</option>
            </select>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name :"App",
    data(){
      return {
        current:[],
        selected_city:'new delhi',
        city_list:['new delhi','mau','mumbai','surat']
      }
    },
    mounted(){
      this.currentData(this.selected_city);
    },
    watch:{
      selected_city:function(){
        this.currentData(this.selected_city);
      }
    },

    methods:{
      async currentData(city){
        console.log('city name : '+ city);
        var api = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+process.env.VUE_APP_OPEN_WEATHER_KEY;
        const res = await fetch(api);
        const data = await res.json();
        this.current = data;
      },
      toDayDate(){
        var d = new Date();
        return d.toDateString()
      }
    }

  }
</script>
