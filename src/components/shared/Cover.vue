<template>
  <div>
    <p class="tagline">K.I.S.S.
      <br>Keep It Simple Stupid
    </p>
    <headline-animation></headline-animation>
    <!-- <div :class="'landing-page background-' + firstBackground"></div>
    <div :class="'landing-page background-' + nextBackground"></div> -->
    <div class="landing-page background-6"></div>
    <div class="landing-page background-5"></div>
    <div class="landing-page background-4"></div>
    <div class="landing-page background-3"></div>
    <div class="landing-page background-2"></div>
    <div class="landing-page background-1"></div>
  </div>
</template>

<script>
import HeadlineAnimation from '@/components/shared/HeadlineAnimation'

const name = 'Cover'

const components = {
  HeadlineAnimation
}

const methods = {
  changeFirstBackground () {
    setTimeout(() => {
      if (this.firstBackground === (this.numOfImages)) {
        this.firstBackground = 2
      } else if (this.firstBackground === (this.numOfImages - 1)) {
        this.firstBackground = 1
      } else {
        this.firstBackground = this.firstBackground + 2
      }
      this.changeNextBackground()
    }, (this.transistionTime * 1000))
  },
  changeNextBackground () {
    setTimeout(() => {
      if (this.nextBackground === (this.numOfImages - 1)) {
        this.nextBackground = 1
      } else if (this.nextBackground === (this.numOfImages)) {
        this.nextBackground = 2
      } else {
        this.nextBackground = this.nextBackground + 2
      }
      this.changeFirstBackground()
    }, (this.transistionTime * 1000))
  }
}

export default {
  name,
  components,
  methods,
  data () {
    return {
      numOfImages: 6,
      transistionTime: 9,
      firstBackground: 1,
      nextBackground: 2
    }
  },
  mounted () {
    // setTimeout(() => { this.changeFirstBackground() }, 1000)
  }
}
</script>

<style>
  .landing-page {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    opacity: 0;
    -webkit-animation: fader 54s infinite;
    animation: fader 54s infinite;
  }

  /* n = number of images (6) */
  /* f = time for image to fade in (2) */
  /* v = time image is visible (10) */
  /* t = how long it will take for the next image to start (9) */
  /* animation-duration = total animation time = t * n (54) */
  /* keyframe-steps = 100% / animation-duration --> each frame = 1s (0.1) */

  .background-1 {
    -webkit-animation-delay: 0;
    animation-delay: 0;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-1.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-1.jpg);
  }
  .background-2 {
    -webkit-animation-delay: 9s;
    animation-delay: 9s;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-2.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-2.jpg);
  }
  .background-3 {
    -webkit-animation-delay: 18s;
    animation-delay: 18s;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-3.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-3.jpg);
  }
  .background-4 {
    -webkit-animation-delay: 27s;
    animation-delay: 27s;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-4.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-4.jpg);
  }
  .background-5 {
    -webkit-animation-delay: 36s;
    animation-delay: 36s;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-5.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-5.jpg);
  }
  .background-6 {
    -webkit-animation-delay: 45s;
    animation-delay: 45s;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.4))), url(/static/img/background-6.jpg);
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-6.jpg);
  }
  /* .background-7 {
    -webkit-animation-delay: 66s;
    -moz-animation-delay: 66s;
    -o-animation-delay: 66s;
    animation-delay: 66s;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-7.jpg);
  }
  .background-8 {
    -webkit-animation-delay: 77s;
    -moz-animation-delay: 77s;
    -o-animation-delay: 77s;
    animation-delay: 77s;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-8.jpg);
  }
  .background-9 {
    -webkit-animation-delay: 88s;
    -moz-animation-delay: 88s;
    -o-animation-delay: 88s;
    animation-delay: 88s;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-9.jpg);
  } */

  @keyframes fader {
    0% { opacity: 0; }
    2% { opacity: 1; }
    18% { opacity: 1; }
    20% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-webkit-keyframes fader {
    0% { opacity: 0; }
    2% { opacity: 1; }
    18% { opacity: 1; }
    20% { opacity: 0; }
    100% { opacity: 0; }
  }

  .tagline {
    position: absolute;
    top: 45%;
    left: 48%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    z-index: 99;
    pointer-events: none;
    color: white;
    -webkit-backface-visibility: hidden;
    -webkit-animation: 3s ease 0s normal forwards 0 tagline-fade-in;
    animation: 3s ease 0s normal forwards 1 tagline-fade-in;
    font-size: 20px;
  }

  @keyframes tagline-fade-in {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 0.6; }
  }
  @-webkit-keyframes tagline-fade-in {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 0.6; }
  }

  @media only screen and (max-width: 500px) {
    .tagline {
      font-size: 16px;
    }
  }
</style>
