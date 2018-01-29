<template>
  <div class="headline-wrapper">
    <h1 class="headline">
      <span>Ryan Vitter</span>
      <span style="margin: 0 10px 0 5px"> | </span>
      <div class="words-wrapper" style="display:inline">
        <span>Developer</span>
        <span>Photographer</span>
        <span>Cartographer</span>
      </div>
    </h1>
  </div>
</template>

<script>
  const name = 'HeadlineAnimation'

  export default {
    name
  }
</script>

<style scoped>
  .headline-wrapper {
    position: absolute;
    width: 55%;
    height: 40%;
    bottom: 0;
    right: 0;
  }

  .headline {
    position: absolute;
    width: 250px;
    left: 0;
    z-index: 99;
    pointer-events: none;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
    -webkit-animation: 3s ease 0s normal forwards 0 title-fade-in;
    animation: 3s ease 0s normal forwards 1 title-fade-in;
    color: white;
    font-size: 28px;
    font-weight: 200;
    text-transform: uppercase;
    opacity: 0.8;
    display: inline;
  }

  .words-wrapper {
    /* display: inline; */
    text-align: left;
    width: 300px;
  }

  .words-wrapper span {
    position: absolute;
    opacity: 0;
    overflow: hidden;
  }

  .words-wrapper span {
    -webkit-backface-visibility: hidden;
    -webkit-animation: rotateWords 18s linear infinite 0s;
  	animation: rotateWords 18s linear infinite 0s;
  }

  .words-wrapper span:nth-child(2) {
    -webkit-animation-delay: 6s;
  	animation-delay: 6s;
  }
  .words-wrapper span:nth-child(3) {
    -webkit-animation-delay: 12s;
  	animation-delay: 12s;
  }

  -webkit-@keyframes rotateWords {
    0% { opacity: 0.8; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 0.8; height: 60px; }
    16% { opacity: 0.8; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }
  -moz-@keyframes rotateWords {
    0% { opacity: 0.8; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 0.8; height: 60px; }
    16% { opacity: 0.8; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }
  -o-@keyframes rotateWords {
    0% { opacity: 0.8; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 0.8; height: 60px; }
    16% { opacity: 0.8; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }
  @-webkit-keyframes rotateWords {
    0% { opacity: 0.8; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 0.8; height: 60px; }
    16% { opacity: 0.8; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }
  @keyframes rotateWords {
    0% { opacity: 0.8; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 0.8; height: 60px; }
    16% { opacity: 0.8; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }

  -webkit-@keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 0.8; }
  }
  -moz-@keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 0.8; }
  }
  -o-@keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 0.8; }
  }
  @-webkit-keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 0.8; }
  }
  @keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 0.8; }
  }

  @media only screen and (max-width: 900px) {
    .headline {
      width: 200px;
      font-size: 26px
    }
  }

  @media only screen and (max-width: 800px) {
    .headline {
      width: 160px;
      font-size: 24px
    }
  }

  @media only screen and (max-width: 560px) {
    .headline-wrapper {
      width: 100%;
    }
    .headline {
      left: 50%;
      -webkit-transform: translateX(-70%);
              transform: translateX(-70%);
      font-size: 22px;
      width: 150px;
    }
  }

  @media only screen and (max-width: 320px) {
    .headline {
      left: 50%;
      -webkit-transform: translateX(-70%);
              transform: translateX(-70%);
      font-size: 18px;
      width: 120px;
    }
  }
</style>
