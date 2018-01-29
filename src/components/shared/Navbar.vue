<template>
  <ul class="navbar">
    <template v-for="(section, index) in sections">
      <div @mouseover="navOver(index)" @mouseleave="navLeave(index)" class="navbar-btn" :key="index">
        <icon class="nav-icon-bottom" name="circle" color="black"></icon>
        <icon class="nav-icon-top" name="circle-thin" color="white"></icon>
        <span class="nav-text">{{ section.text }}</span>
      </div>
    </template>
  </ul>
</template>

<script>
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/camera-retro'
import 'vue-awesome/icons/map-o'

import 'vue-awesome/icons/circle'
import 'vue-awesome/icons/circle-thin'
import Icon from 'vue-awesome/components/Icon'

const name = 'navbar'

const components = {
  Icon
}

const methods = {
  navOver (index) {
    const el = document.getElementsByClassName('nav-icon-bottom')[index]
    el.style.fill = 'white'
    const text = document.getElementsByClassName('nav-text')[index]
    text.style.opacity = 0.7;
  },
  navLeave (index) {
    const el = document.getElementsByClassName('nav-icon-bottom')[index]
    el.style.fill = 'black'
    const text = document.getElementsByClassName('nav-text')[index]
    // text.style.opacity = 0;
  }
}

export default {
  name,
  components,
  methods,
  data () {
    return {
      sections: [
        {
          text: 'Home',
          icon: 'home'
        },
        {
          text: 'Code',
          icon: 'code'
        },
        {
          text: 'Photos',
          icon: 'camera-retro'
        },
        {
          text: 'Map',
          icon: 'map-o'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .navbar {
    position: fixed;
    bottom: 10px;
    color: white;
    z-index: 99;
    text-align: left;
    text-transform: uppercase;
    margin-left: 10px;
    -webkit-padding-start: 0px;
    -webkit-animation: 3s ease 0s normal forwards 0 navbar-fade-in;
    animation: 3s ease 0s normal forwards 1 navbar-fade-in;
  }

  .navbar-btn {
    display: block;
    margin-top: 5px;
    opacity: 0.6;
  }

  .navbar-btn span {
    margin-left: 25px;
    font-size: 20px;
    opacity: 1;
  }

  .nav-icon-bottom {
    position: absolute;
    z-index: 10;
  }

  .nav-icon-top {
    position: absolute;
    z-index: 20;
  }

  .nav-icon-top:hover {
    opacity: 0.9;
    fill: white;
    cursor: pointer;
  }

  @keyframes navbar-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 1; }
  }

  .nav-item {
    margin: 0 5px;
  }
</style>
