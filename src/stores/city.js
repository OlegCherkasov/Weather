import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { capitalizeFirstLetter } from '@/utils'


export const useCity = defineStore('city', () => {
  const city = ref('brovary')

  const cityWithUpper = computed(() => {
    return(
      !city.value ? 'Brovary'
      : capitalizeFirstLetter(city.value)
    )
} )
  return { city, cityWithUpper }
})

// export const useCity = defineStore('city', {
//   state: () => ({
//     city: 'brovary',
//   }),

//   getters: {
//     cityWithUpper: (state) => {
//       return (
//       !state.city ? 'Brovary'
//       : capitalizeFirstLetter(state.city)
//       )
//     },
//   }
// })