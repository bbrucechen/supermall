<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    <detail-param-info :paramInfo="detailParam"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    <goods-list :goods="recommendInfo"></goods-list>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>  
</template>

<script>
import detailNavBar from './childCompos/detailNavBar'
import detailSwiper from './childCompos/detailSwiper.vue'
import DetailBaseInfo from './childCompos/DetailBaseInfo.vue'
import DetailShopInfo from './childCompos/DetailShopInfo.vue'
import DetailGoodsInfo from './childCompos/DetailGoodsInfo.vue'
import DetailParamInfo from './childCompos/DetailParamInfo.vue'
import DetailCommentInfo from './childCompos/DetailCommentInfo.vue'
import GoodsList from 'components/content/GoodsList/GoodsList.vue'
import DetailBottomBar from './childCompos/DetailBottomBar.vue'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'

import {mapActions} from 'vuex'


export default {
  components:{
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return {
      currentIndex:0,
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailParam:{},
      commentInfo:{},
      detailInfo:{},
      recommendInfo:{}
    }
  },
  created() {
    this.iid = this.$route.params.id
    getDetail(this.iid).then(res => {
      // 保存轮播图图片
      this.topImages = res.result.itemInfo.topImages
      
      // 保存基本信息
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)

      // 保存商家信息
      this.shop = new Shop(res.result.shopInfo)

      // 保存商品详细信息
      this.detailInfo = res.result.detailInfo

      // 保存商品参数
      this.detailParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)

      // 保存评论信息
      this.commentInfo = res.result.rate.list[0]
    })
    getRecommend().then(res => this.recommendInfo = res.data)
  },
  methods:{
    ...mapActions(['addCart']),
    addToCart() {
      const product = {};
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      product.checked = true

      this.addCart(product).then(res => {
        this.$toast.toastShow(res,1500)
      })
    }
  }
}
</script>

<style>
 
</style>