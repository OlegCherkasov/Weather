<script setup>
import { ref, watch }  from 'vue'
import { API_KEY, BASE_URL } from '@/constants'


import HeaderInput from '@/components/HeaderInput.vue'
import BlockCity from '@/components/BlockCity.vue'
import NowWeather from '@/components/NowWeather.vue'
import TodayWeather from '@/views/TodayWeather.vue'
import FooterBlock from '@/components/FooterBlock.vue'

import { useCity } from '@/stores/city.js'
const storeCity = useCity()

import { weather } from '@/stores/weather.js'
const storeWeather = weather()

const weatherNow = ref(null)

function getWeather() {
  fetch(`${BASE_URL}?q=${storeCity.city}&units=metric&lang=en&appid=${API_KEY}`)
    .then( (response) => response.json())
    .then((data) => {
      weatherNow.value = data
      storeWeather.weatherNow = data
    })
}



watch( 
  storeCity,
  () => {
    getWeather()
    },
    {
      immediate: true,
      // deep: true
    })
</script>

<template>
  <div class="container">
    <HeaderInput />
    <BlockCity />
    <div class="weather">
      <NowWeather />
      <!-- <NowWeather :weatherNow="weatherNow" /> -->
      <TodayWeather />
    </div>
    <FooterBlock />
  </div>

</template>

<style lang="sass">
@import '@/assets/styles/main'

*
  box-sizing: border-box
  margin: 0
  padding: 0



.container 
  max-width: 1440px
  margin: 0 auto
  padding: 20px
  background-color: $background-app

  .weather
    display: flex
    flex-wrap: wrap
    justify-content: space-between

</style>