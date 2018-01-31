<template>
  <div>
    <carousel navColor="#999">
      <div class="app-wrapper">
        <div class="app">
          <Statify></Statify>
        </div>
        <div class="app">
          <NpsMap></NpsMap>
        </div>
        <div class="app">
          <VueInfinityCarousel></VueInfinityCarousel>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
  import Carousel from '@/components/shared/Carousel'
  import { Statify, NpsMap, VueInfinityCarousel } from '@/components/Apps'

  const name = 'Apps'

  const components = {
    Statify,
    NpsMap,
    VueInfinityCarousel,
    Carousel
  }

  export default {
    name,
    components
  }
</script>

<style scoped>
  .app-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .app {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
  }
</style>
