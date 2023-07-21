<script setup>
import { ref, onMounted } from 'vue'
import { useCity } from '@/stores/city.js'
import { capitalizeFirstLetter } from '@/utils'


const storeCity = useCity()
const nowCity = ref('')

function sendNowCity() {
  storeCity.city = nowCity.value
  nowCity.value = ''
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',}
    
// let date = computed(() => {
//   return new Date().toLocaleString( 'uk-UA', options )
// }) 

const date = ref('')

onMounted(() => {
  setInterval(() => {
    date.value = new Date().toLocaleString( 'uk-UA', options )
  }, 1000)
})

</script>

<template>
    <div class="header">
      <div class="title_input">
        <h2>
          Weather
          <span class="in">in</span>
        </h2>
        <div class="search">
          <img class="img" src="@/assets/img/search.png" alt="search city" height="23" width="23"/>
          <input
            v-model="nowCity"
            @keyup.enter="sendNowCity"
            class="input"
            type="text"
            placeholder="location search"
            />
        </div>
      </div>
      <h3>{{capitalizeFirstLetter(date)}}</h3>
      <!-- <button class="but">Eng</button> -->
    </div>
</template>

<style lang="sass" scopeed>
@import '@/assets/styles/main'

.header 
  padding: 15px
  color: $font-color
  display: flex
  border: 2px solid white
  border-radius: 14px
  background: $background-block
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-evenly
  align-items: center
  gap: 10px
  text-align: center

  .title_input
    max-width: 367px
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 20px
  
    .in 
      padding-left: 10px
      font-size: 0.7em
      font-weight: 500

    .search
      position: relative

    .img
      display: block
      position: absolute
      top: 3px
      left: 3px

    .input
      width: 230px
      height: 30px
      padding-left: 40px
      font-size: 18px
      border: 2px solid $background-app
      border-radius: 8px
      background: $background-block

    .input:hover
      outline: 3px solid white

    .input:focus-visible
      outline: 2px solid white
      outline-offset: 3px

  .but 
    width: 30px
    height: 30px
    border: 1px solid black
    border-radius: 8px
</style>