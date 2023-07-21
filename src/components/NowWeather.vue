<script setup>
import { ref, onMounted, computed, watch }  from 'vue'
import { capitalizeFirstLetter } from '@/utils'

import { useCity } from '@/stores/city.js'
  const storeCity = useCity()

import { weather } from '@/stores/weather.js'
  const storeWeather = weather()
    
// const props = defineProps({
  //   weatherNow: {
    //     type: [ Object, null],
    //     required: true,
    //     default: () => {}
    //   }
    // })

let direction = (val) => {
  if ( 45 >= val || val >= 315 ) { 
    return "Nordic" 
  } else  if ( 45 < val && val < 135 ) {
    return "East"
  } else  if ( 135 <= val && val <= 225 ) {
    return "South"
  } else  if ( 225 < val && val < 315 ) {
    return "West"
  } else 
  return "Calm"
}
    
const time2 = ref('')
const time4 = ref('')
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',}

onMounted(() => {
  setInterval(() => {
    time2.value = new Date().getTimezoneOffset()*60*1000
    time4.value = new Date(Date.now() + (storeWeather.weatherNow?.timezone * 1000) + time2.value).toLocaleString( 'en-GB', options )

  }, 1000)
})

watch( 
  storeCity,
    () => {
      storeWeather.getWeather(storeCity.city)
    },
    {
    immediate: true,
    deep: true
    }
)

</script>

<template>
  <div class="now">
    <div class="now-title">
      <h3>{{ storeWeather.weatherNow?.name }}</h3>
      <h2>NOW</h2>
    </div>


    <!-- <p>GMT0 {{time}}</p> -->
    <!-- <p>{{time2}}</p> -->
    <p>{{time4}}</p>

    <h1 class="temp">{{ storeWeather.weatherNow?.main?.temp.toFixed(1) }}<span class="temp-c">&#8451;</span></h1>
    <p>Feels like: {{ storeWeather.weatherNow?.main?.feels_like.toFixed(1) }} &#8451;</p>
    <p>{{capitalizeFirstLetter(storeWeather.weatherNow?.weather[0].description)}}</p>
    
    <div class="fact">
      <div class="data">
        <p>Wind:</p>
        <p>{{ storeWeather.weatherNow?.wind?.speed }} m/c</p>
      </div>
      <div class="data">
        <p>Direction:</p>
        <p>{{ direction(storeWeather.weatherNow?.wind?.deg) }}</p>
      </div>
      <div class="data">
        <p>Pressure:</p>
        <p>{{ (storeWeather.weatherNow?.main?.pressure / 1.333).toFixed(0) }} mmHg</p>
      </div>
      <div class="data">
        <p>Humidity:</p>
        <p>{{ storeWeather.weatherNow?.main?.humidity }} %</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scopeed>
@import '@/assets/styles/main'

.now
  margin-top: 20px
  padding: 20px
  color: $font-weather
  border: 2px solid white
  border-radius: 14px
  background-image: url('@/assets/img/sky_1.jpg')
  background-position: right
  background-size: cover
  font-size: 26px
  display: flex
  flex-direction: column
  gap: 32px
  text-align: center

  .now-title
    margin-top: 20px
    color: $white
    align-self: flex-end
    display: flex
    align-items: baseline
    gap: 20px

  .temp
    font-size: 80px

    .temp-c
      font-size: 40px

  .fact
    font-size: 20px
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    gap: 10px

  .data
    width: 120px
    padding: 8px
    text-align: center
    border: 2px solid white
    border-radius: 14px

</style>