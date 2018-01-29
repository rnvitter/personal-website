<template>
  <div class="statify-cover">
    <div class="title-wrapper">
      <h2 class="title">Statify <span class="separator">|</span></h2>
      <h2 class="go-to-btn" @click="goTo">Go To</h2>
    </div>
    <AudioAnimation></AudioAnimation>
  </div>
</template>

<script>
  import AudioAnimation from './AudioAnimation'

  const name = 'StatifyCover'

  const components = {
    AudioAnimation
  }

  const methods = {
    goTo () {
      window.location.href = 'https://statify-beta.herokuapp.com/'
    }
  }

  export default {
    name,
    components,
    methods
  }
</script>

<style scoped>
  .statify-cover {
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
            flex-direction: column; /* Chrome 10+, Saf5.1+ */ /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(10%, #dee1e1), color-stop(90%, #f4f4f4));
    background: linear-gradient(90deg, #dee1e1 10%, #f4f4f4 90%); /* W3C */
  }

  .title-wrapper {
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

  .separator {
    margin-left: 5px;
  }

  .go-to-btn {
    margin: auto 10px auto;
    color: #32CD32;
    font-size: 22px;
  }

  .go-to-btn:hover {
    border-bottom: 1px solid #32CD32;
    cursor: pointer;
  }
</style>
