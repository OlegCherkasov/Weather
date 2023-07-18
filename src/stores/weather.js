import { ref } from 'vue'
import { defineStore } from 'pinia'


export const weather = defineStore('weather', () => {
  const weatherNow = ref(null)

  return { weatherNow }
})
