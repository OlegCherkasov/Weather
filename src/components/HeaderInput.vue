<script setup>
import { ref } from 'vue'
import { useCity } from '@/stores/city.js'

const store = useCity()
const nowCity = ref('')

function sendNowCity() {
  store.city = nowCity.value
  nowCity.value = ''
}
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
      <button class="but">Eng</button>
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
  justify-content: space-between

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