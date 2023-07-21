<script setup>
import HeaderInput from '@/components/HeaderInput.vue'
import BlockCity from '@/components/BlockCity.vue'
import NowWeather from '@/components/NowWeather.vue'
import FooterBlock from '@/components/FooterBlock.vue'

</script>

<template>
  <div class="container">
    <HeaderInput />
    <BlockCity />
    <div class="weather">
      <NowWeather />
      <RouterView />
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