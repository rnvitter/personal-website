<template>
  <div>
    <template v-for="(category, index) in allCategories">
      <carousel :index="index" navColor="white">
        <template v-for="photo in category.category">
          <img class="photos" :src="photo.src" style="height:25vh"/>
        </template>
      </carousel>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import Carousel from '@/components/shared/Carousel'

import services from '../services/services'

const name = 'Photography'

const components = {
  Carousel
}

const computed = {
  allCategories () {
    const categories = []
    const tags = ['nature', 'animal', 'people', 'misc']
    tags.forEach(tag => {
      let category = (_.filter(this.photoset, photo => photo.tags.includes(tag))).reverse()
      categories.push({
        'name': tag,
        'category': category
      })
    })
    return categories
  }
}

export default {
  name,
  components,
  computed,
  data () {
    return {
      photoset: []
    }
  },
  mounted () {
    services.photos().then((res) => {
      const data = JSON.parse(res.data)
      const photos = data.photoset.photo
      _.forEach(photos, photo => {
        let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
        let obj = {
          src: url,
          tags: photo.tags
        }
        this.photoset.push(obj)
      })
    })
  }
}
</script>

<style scoped>
  .photos {
    padding: 0.5px 0;
    /* -webkit-animation: 4s ease 0s normal forwards photo-fade-in; */
    /* animation: 4s ease 0s normal forwards photo-fade-in; */
  }

  .photos:not(:first-child) {
    padding-left: 0.5px;
  }

  .photos:not(:last-child) {
    padding-right: 0.5px;
  }

  @-webkit-keyframes photo-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes photo-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
