<template>
  <div class="carousel-wrapper" @mouseover="showArrows" @mouseleave="hideArrows" :ref="'carousel_' + index">
    <div class="carousel">
      <slot></slot>
    </div>
    <div class="left-arrow-btn" @click="scrollLeft" v-if="!hideNavArrows">
      <icon class="nav-arrows" name="angle-left" :color="navColor" style="left:15px"></icon>
    </div>
    <div class="right-arrow-btn" @click="scrollRight" v-if="!hideNavArrows">
      <icon class="nav-arrows" name="angle-right" :color="navColor" style="right:15px"></icon>
    </div>
  </div>
</template>

<script>
  // add infinite loop
  // add random moving/shuffle
  // add snapping to sliding

  import 'vue-awesome/icons/angle-left'
  import 'vue-awesome/icons/angle-right'
  import Icon from 'vue-awesome/components/Icon'

  const name = 'Carousel'

  const props = {
    index: { required: false, default: 0 },
    navColor: { required: false, default: '#d3d3d3' },
    hideNavArrows: { required: false, default: false }
  }

  const components = {
    Icon
  }

  const methods = {
    showArrows () {
      if (!this.hideNavArrows) {
        const el = this.$refs[this.name]
        el.getElementsByClassName('left-arrow-btn')[0].style.opacity = 0.8
        el.getElementsByClassName('right-arrow-btn')[0].style.opacity = 0.8
        if (this.fullscreen) {
          el.getElementsByClassName('fullscreen-btn')[0].style.opacity = 0.8
        }
      }
    },
    hideArrows () {
      if (!this.hideNavArrows) {
        const el = this.$refs[this.name]
        el.getElementsByClassName('left-arrow-btn')[0].style.opacity = 0
        el.getElementsByClassName('right-arrow-btn')[0].style.opacity = 0
        if (this.fullscreen) {
          el.getElementsByClassName('fullscreen-btn')[0].style.opacity = 0
        }
      }
    },
    scrollRight () {
      if (!this.hideNavArrows) {
        this.$refs[this.name].getElementsByClassName('carousel')[0].scrollLeft += window.innerWidth
      }
    },
    scrollLeft () {
      if (!this.hideNavArrows) {
        this.$refs[this.name].getElementsByClassName('carousel')[0].scrollLeft -= window.innerWidth
      }
    }
  }

  export default {
    name,
    props,
    components,
    methods,
    data () {
      return {
        name: 'carousel_' + this.index
      }
    }
  }
</script>

<style scoped>
  .fa-icon {
    width: auto;
    height: 1em; /* or any other relative font sizes */
    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }

  .carousel-wrapper {
    position: relative;
  }

  .carousel {
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    cursor: -webkit-grab;
    cursor: grab;
    scroll-behavior: smooth;
  }

   @-moz-document url-prefix() {
     .carousel {
       overflow-x: hidden !important;
     }
   }

  ::-webkit-scrollbar {
    display:none;
  }

  .nav-arrows {
    position: absolute;
    z-index: 999;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    bottom: 50%;
    font-size: 42px;
  }

  .left-arrow-btn, .right-arrow-btn {
    opacity: 0;
  }

  .left-arrow-btn .nav-arrows:hover, .right-arrow-btn .nav-arrows:hover {
    opacity: 0.9;
  }
</style>
