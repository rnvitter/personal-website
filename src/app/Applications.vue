<template>
  <div>
    <carousel navColor="#999">
      <div class="app-wrapper">
        <div class="app">
          <StatifyCover></StatifyCover>
        </div>
        <div class="app">
          <NpsCover></NpsCover>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
  import Carousel from '@/components/shared/Carousel'
  import { StatifyCover, NpsCover } from '@/components/AppCovers'

  const name = 'Applications'

  const components = {
    StatifyCover,
    NpsCover,
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
