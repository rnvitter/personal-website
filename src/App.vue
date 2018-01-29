<template>
  <div id="app">
    <div v-if="isIE">
      <h2>IE doesn't support my animations so I don't support them</h2>
      <h2>Do yourself a favor and download any other browser, here's 2 great alternatives</h2>
      <p style="cursor:pointer; text-decoration:underline; color:blue;"
        @click="doYourselfAFavor('https://www.google.com/chrome/browser/desktop/index.html')">Chrome</p>
      <p style="cursor:pointer; text-decoration:underline; color:blue;"
        @click="doYourselfAFavor('https://www.mozilla.org/en-US/firefox/new/')">Firefox</p>
    </div>
    <div v-else>
      <header>
        <!-- <navbar/> -->
        <cover/>
      </header>
      <applications id="applications" class="section"/>
      <photography id="photography" class="section"/>
      <cartography id="cartography" class="section"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar'
import Cover from '@/components/shared/Cover'
import Applications from '@/app/Applications'
import Cartography from '@/app/Cartography'
import Photography from '@/app/Photography'

export default {
  name: 'app',
  components: {
    Navbar,
    Cover,
    Photography,
    Applications,
    Cartography
  },
  methods: {
    doYourselfAFavor (url) {
      window.location.href = url
    }
  },
  data () {
    return {
      isIE: undefined
    }
  },
  beforeMount () {
    this.isIE = /*@cc_on!@*/false || !!document.documentMode
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:300');

  body {
    margin: 0;
  }

  #app {
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow-y: hidden;
  }

  *, *::before, *::after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
  }

  /* fixes extra space/padding on bottom of img */
  img {
    vertical-align: middle;
    border-style: none;
    page-break-inside: avoid;
  }

  header {
    height: 100vh;
  }

  .section {
    height: 100vh;
    width: 100%;
    background-color: white;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
