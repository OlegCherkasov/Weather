<script setup>
import { useCity } from '@/stores/city.js'
const storeCity = useCity()

import { weather } from '@/stores/weather.js'
const storeWeather = weather()

// const props = defineProps({
//   city: {
//     type: String,
//     required: true
//   }
// })

</script>

<template>
  <div class="city">
    <div class="adress">
      <p>latitude: {{ storeWeather.weatherNow?.coord?.lat.toFixed(2) }} /</p>
      <p>longitude: {{ storeWeather.weatherNow?.coord?.lon.toFixed(2) }}</p>
    </div>
    <h2 v-if="storeWeather.weatherNow?.sys?.country"
      class="city-now">
      {{ storeWeather.weatherNow?.name }} ,
      {{ storeWeather.weatherNow?.sys?.country }}
    </h2>
    <h2 v-else
      class="city-now">
      {{ storeCity.cityWithUpper }} : city not found
    </h2>
      <nav class="period">
        <RouterLink class="period_time" to="/">Today</RouterLink>
        <RouterLink class="period_time" to="/tomorrow">Tomorrow</RouterLink>
      </nav>
  </div>
</template>

<style lang="sass" scopeed>
@import '@/assets/styles/main'

.city
  margin-top: 20px
  padding: 10px 20px 10px 20px
  color: $white
  border: 2px solid white
  border-radius: 14px
  background-image: url('@/assets/img/sky_block.jpg')
  background-position: center
  background-size: cover
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  gap: 10px

  .adress
    font-size: 22px
    display: flex
    flex-wrap: wrap
    align-self: flex-start
    gap: 7px


  .city-now
    font-size: 32px
    line-height: 24px
    text-align: center  

  .period
    display: flex
    align-self: end
    gap: 30px

    .period_time
      font-size: 24px
      font-weight: 700
      color: $white
      text-decoration: none
</style>