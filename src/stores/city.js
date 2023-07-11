import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCity = defineStore('city', () => {
  const city = ref('brovary')

  return { city  }
})
