<template>
    <swiper class="detail-swiper"> 
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
  props:{
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>
  .detail-swiper {
    width: 100%;
    height: 300px;
    padding-top:44px;
  }
</style>