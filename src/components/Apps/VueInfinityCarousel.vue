<template>
  <div class="carousel-cover">
    <div class="title">
      <h2 class="header">Vue Infinity Carousel</h2>
      <p>Coming Soon<br>
      <br>A custom carousel component for Vue</p>
    </div>
  </div>
</template>

<script>
  const name = 'VueInfinityCarousel'

  export default {
    name
  }
</script>

<style scoped>
  .carousel-cover {
    height: 100vh;
    background: -webkit-gradient(linear, left top, right top, color-stop(10%, #dee1e1), color-stop(90%, #f4f4f4));
    background: linear-gradient(90deg, #dee1e1 10%, #f4f4f4 90%); /* W3C */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }

  .title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin: auto 0 auto 0;
  }

  .header {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }
</style>
