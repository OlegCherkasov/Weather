import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCityWeather } from '@/backend/weatherAPI'

export const weather = defineStore('weather', () => {
  const weatherNow = ref(null)

  async function getWeather(city) {
    weatherNow.value = await getCityWeather(city)
  }
  return { weatherNow, getWeather}
})
