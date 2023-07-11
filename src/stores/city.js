import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCity = defineStore('city', () => {
  const city = ref('brovary')

  const cityWithUpper = computed(() => {
    return(
      !city.value ? 'Brovary'
      : city.value.charAt(0).toUpperCase() + city.value.slice(1)
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
//       : state.city.charAt(0).toUpperCase() + state.city.slice(1)
//       )
//     },
//   }
// })