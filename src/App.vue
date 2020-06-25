<template>
  <div id="app">
    <div id="nav"></div>
    <div class="container">
      <div class="app">
        <div class="header">
          <img src="https://s5.postimg.org/7l2xf9mjr/mumbai.jpg" alt="">
          <span class="city">
            {{ current.name }} , {{ current.sys.country }}
            <i class="fa fa-map-marker"></i>
            <span class="today">Today</span>
          </span>
          <span class="weather">
            <span class="temp">
              {{ Math.round(current.main.temp) }}<sup>&deg;</sup>
              <span class="unit">c</span>
            </span>
            <span class="wind-scale">
              <table>
                <tr>
                  <td>Wind Direction</td>
                  <td>
                    <i class="wi wi-wind towards-45-deg"></i>
                  </td>
                </tr>
                <tr>
                  <td>Wind Scale</td>
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
            <span class="day">{{ toDayDate() }}</span>
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
        <div class="footer">
          <span class="title">Friends</span>
          <ul class="friends">
            <li>
              <img src="https://s5.postimg.org/bc7wnuaub/hardik.jpg" alt="">
              <span class="friends-city-weather">
                <i class="wi wi-night-sprinkle"></i>
                <span class="temp">25<sup>&deg;</sup></span>
              </span>
              <span class="detail">
                Hardik
                <span class="city">
                  Surat
                </span>
                <span class="country">
                  India
                </span>
              </span>
            </li>
            <li>
              <img src="https://s5.postimg.org/89bry7l9f/virat.jpg" alt="">
              <span class="friends-city-weather">
                <i class="wi wi-night-cloudy-high"></i>
                <span class="temp">21<sup>&deg;</sup></span>
              </span>
              <span class="detail">
                Virat
                <span class="city">
                  Delhi
                </span>
                <span class="country">
                  India
                </span>
              </span>
            </li>
            <li>
              <img src="https://s5.postimg.org/cfwmdjkv7/dhoni.jpg" alt="">
              <span class="friends-city-weather">
                <i class="wi wi-night-cloudy-windy"></i>
                <span class="temp">29<sup>&deg;</sup></span>
              </span>
              <span class="detail">
                Dhoni
                <span class="city">
                  Ranchi
                </span>
                <span class="country">
                  India
                </span>
              </span>
            </li>
            <li>
              <img src="https://s5.postimg.org/o6ajuxdnn/sachin.jpg" alt="">
              <span class="friends-city-weather">
                <i class="wi wi-night-sleet"></i>
                <span class="temp">22<sup>&deg;</sup></span>
              </span>
              <span class="detail">
                Sachin
                <span class="city">
                  Mumbai
                </span>
                <span class="country">
                  India
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="yt">
      <a href="https://youtu.be/ObSpKBPMfYs" target="_blank">
        <img width="151" src="https://s5.postimg.org/vzwuxmw87/template.png" alt="" />
      </a>
    </div>

  </div>
</template>

<script>
  export default{
    name :"App",
    data(){
      return {
        current:[],
      }
    },
    mounted(){
      this.currentData();
    },
    methods:{
      async currentData(){
        var api = "https://api.openweathermap.org/data/2.5/weather?q=mau&units=metric&appid="+process.env.VUE_APP_OPEN_WEATHER_KEY;
        console.log(api);
        const res = await fetch(api);
        const data = await res.json();
        this.current = data;
        console.log(this.current);
      },
      toDayDate(){
        var d = new Date();
        return d.toDateString();
      }
    }

  }
</script>


<style lang="scss">

</style>
