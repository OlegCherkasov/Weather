<script setup>
import { ref, onMounted, computed, watch }  from 'vue'
import { capitalizeFirstLetter } from '@/utils'


const props = defineProps({
  weatherNow: {
    type: [ Object, null],
    required: true,
    default: () => {}
  }
})
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

let date = computed(() => {
  return new Date().toLocaleString('uk-UA', options )
}) 


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

const time = ref('')

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})

</script>

<template>
  <div class="now">
    <h2 class="now-title">NOW</h2>
    <p>{{capitalizeFirstLetter(date)}}</p>
    <p>{{time}}</p>
    <h1 class="temp">{{ weatherNow?.main.temp }}<span class="temp-c">&#8451;</span></h1>
    <p>Feels like: {{ weatherNow?.main.feels_like.toFixed(1) }} &#8451;</p>
    <p>{{capitalizeFirstLetter(weatherNow?.weather[0].description)}}</p>
    
    <div class="fact">
      <div class="data">
        <p>Wind:</p>
        <p>{{ weatherNow?.wind.speed }} m/c</p>
      </div>
      <div class="data">
        <p>Direction:</p>
        <p>{{ direction(weatherNow?.wind.deg) }}</p>
      </div>
      <div class="data">
        <p>Pressure:</p>
        <p>{{ (weatherNow?.main.pressure / 1.333).toFixed(0) }} mmHg</p>
      </div>
      <div class="data">
        <p>Humidity:</p>
        <p>{{ weatherNow?.main.humidity }} %</p>
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
  justify-content: space-between
  align-items: center
  gap: 30px

  .now-title
    margin-top: 20px
    margin-right: 10%
    color: $white
    align-self: flex-end

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