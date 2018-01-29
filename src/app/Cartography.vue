<template>
  <div>
    <carousel navColor="black">
      <div class="wrapper">
        <div class="map-wrapper">
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-UbEZycFlkSzZVUms/view?usp=sharing')"
            src="/static/maps/gdp_vs_spi.png" alt="GDP Vs SPI"/>
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-URUNxa3d1ejZrOW8/view?usp=sharing')"
            src="/static/maps/human_development_and_terrorism.png" alt="HDI and Terrorism"/>
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-UM1VqZThtLXcxb3c/view?usp=sharing')"
            src="/static/maps/0ptimus_poster.png" alt="0ptimus Poster"/>
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-UR0NnMFEzRVRnOUk/view?usp=sharing')"
            src="/static/maps/google_trends_political_issues.png" alt="Google Trends of Polical Issues"/>
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-UNTJqOUczV0pERlk/view?usp=sharing')"
            src="/static/maps/tx_likely_voters.png" alt="Texas Likely Voters"/>
          <img class="map"
            @click="goFullscreen('https://drive.google.com/file/d/0BxLnMO72hm-UTU5kc3d0SHdCOVU/view?usp=sharing')"
            src="/static/maps/west_indies_reference.png" alt="West Indies Reference Map"/>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
  import Carousel from '@/components/shared/Carousel'

  const name = 'Cartography'

  const components = {
    Carousel
  }

  const methods = {
    goFullscreen (url) {
      window.location.href = url
    }
  }

  export default {
    name,
    components,
    methods
  }
</script>

<style scoped>
  .wrapper {
    position: relative;
    height: 100vh;
  }

  .map-wrapper {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }

  .map {
    width: 500px;
    height: auto;
    margin: auto;
    padding: 20px;
    -webkit-animation: 4s ease 0s normal forwards 0 map-fade-in;
    animation: 4s ease 0s normal forwards 1 map-fade-in;
  }

  .map:hover {
    cursor: pointer;
    border: 1px solid rgba(211, 211, 211, 0.5)
  }

  @-webkit-keyframes map-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes map-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media only screen and (max-width: 900px) {
    .map {
      width: 50vw;
      margin: 0 25vw;
    }
  }

  @media only screen and (max-width: 500px) {
    .map {
      width: 90vw;
      margin: 0 5vw;
    }
  }
</style>
