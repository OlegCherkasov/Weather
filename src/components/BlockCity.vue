<script setup>
import { capitalizeFirstLetter } from '@/utils'

const props = defineProps({
  city: {
    type: String,
    required: true
  }
})
const items = [ 'today', 'tomorrow']
</script>

<template>
  <div class="city">
    <p class="adress">adress</p>
    <h2 class="city-now">{{ capitalizeFirstLetter(city) }}</h2>
    <div class="period">
      <button class="period_time" v-for="(item, index) in items" :key="index">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<style lang="sass" scopeed>
@import '@/assets/styles/main'

.city
  height: 120px
  margin-top: 20px
  padding: 15px
  color: $white
  border: 2px solid white
  border-radius: 14px
  background-image: url('@/assets/img/sky_block.jpg')
  background-position: center
  background-size: cover

  .adress
    font-size: 22px
    padding-left: 20px

  .city-now
    font-size: 32px
    line-height: 24px
    text-align: center  

  .period
    margin-top: 12px
    padding-right: 40px
    display: flex
    justify-content: flex-end
    gap: 50px

    .period_time
      font-size: 20px
      color: $white
      border: none
      background-color: transparent
      cursor: pointer
</style>