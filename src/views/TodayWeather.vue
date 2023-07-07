<script setup>
</script>

<template>
  <div class="today">
    <h2 class="today-title">TODAY</h2>
  </div>

</template>

<style lang="sass" scopeed>
@import '@/assets/styles/main'

.today
  margin-top: 20px
  padding: 15px
  color: $white
  border: 2px solid white
  border-radius: 14px
  background-image: url('@/assets/img/sky_2.jpg')
  background-position: left
  background-size: cover

  .today-title
    margin-top: 20px
    margin-left: 40px
    text-align: start

</style>