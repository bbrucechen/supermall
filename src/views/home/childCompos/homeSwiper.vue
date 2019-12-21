<template>
    <swiper>
        <swiper-item v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
export default {



    name: 'homeSwiper',
    props: {
        banner: {
            type: Array,
            default () {
                return []
            }
        }
    },

    data() {
        return {

        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>
<style lang="css" scoped>
</style>