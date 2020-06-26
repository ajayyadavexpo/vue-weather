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








<!--     <div class="container" v-if="current.sys">
      <div class="app">
        <div class="header">
          <img src="https://s5.postimg.org/7l2xf9mjr/mumbai.jpg" alt="">
          <span class="city">
            {{ current.name }} , {{ current.sys.country }}
            <i class="fa fa-map-marker"></i>
            <span class="today">Today : {{ toDayDate() }}</span>
          </span>
          <span class="weather">
            <span class="temp">
              {{ Math.round(current.main.temp) }}<sup>&deg;</sup>
              <span class="unit">c</span>
            </span>
            <span class="wind-scale">
              <table>
                <tr>
                  <td>Wind deg : {{ current.wind.deg }}</td>
                  <td>
                    <i class="wi wi-wind towards-45-deg"></i>
                  </td>
                </tr>
                <tr>
                  <td>Wind Speed : {{ current.wind.speed }}</td>
                  <td>
                    
                    <i class="wi wi-wind-beaufort-7"></i>
                  </td>
                </tr>
                
              </table>
            </span>
            
            <i class="wi wi-night-sleet"></i>
            <span class="time">
              <i class="wi wi-time-3"></i>
            </span>
            <span class="day">
              <select v-model="selected_city">
                <option v-for="city in city_list" :key="city">{{ city }}</option>
            </select>
            </span>
          </span>
        </div>
        <div class="body">
          <span class="title">Weather Stats</span>
          <div class="graph">
            <ul>
              <li class="graph-knob-mt-26">
                <span class="graph-temp">
                  <i class="wi wi-night-cloudy"></i>
                  26<sup>&deg;</sup>
                </span> 23
              </li>
              <li class="graph-knob-mt-25">
                <span class="graph-temp">
                  <i class="wi wi-lightning"></i>
                  25<sup>&deg;</sup>
                </span> 24
              </li>
              <li class="graph-knob-mt-28">
                <span class="graph-temp">
                  <i class="wi wi-night-cloudy-gusts"></i>
                  28<sup>&deg;</sup>
                </span> 25
              </li>
              <li class="today graph-knob-mt-22">
                <span class="graph-temp">
                  <i class="wi wi-night-sleet"></i>
                  22<sup>&deg;</sup>
                </span> 26
              </li>
              <li class="graph-knob-mt-20">
                <span class="graph-temp">
                  <i class="wi wi-night-alt-thunderstorm"></i>
                  20<sup>&deg;</sup>
                </span> 27
              </li>
              <li class="graph-knob-mt-18">
                <span class="graph-temp">
                  <i class="wi wi-smoke"></i>
                  18<sup>&deg;</sup>
                </span> 28
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div> -->

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


<style lang="scss">
select{
  height: 37px;
  padding: 10px 10px;
  width: 133px;
  background: #49516d;
  border: none;
  color: white;
}
</style>
