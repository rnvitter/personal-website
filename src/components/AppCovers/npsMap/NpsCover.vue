<template>
  <div class="nps-cover">
    <div class="title">
      <h2 class="header">National Parks Map</h2>
      <p>Coming Soon</p>
    </div>
  </div>
</template>

<script>
  const name = 'NpsCover'

  export default {
    name
  }
</script>

<style scoped>
  .nps-cover {
    height: 100vh;
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
