<template>
	<div>
		<!-- 顶部导航栏 -->
		<nav-bar class="navbar">
			<span slot="center">
				购物街
			</span>
		</nav-bar>
		
		<!-- 轮播图 -->
		<home-swiper :banner="banner" class="home-swiper"></home-swiper>

		<!-- 推荐模块 -->
		<home-recommend :recommend="recommend"></home-recommend>

		<!-- 本周流行 -->
		<home-feature></home-feature>

		<!-- 商品分类选项卡模块 -->
		<tab-control :titles="titles" @tabClick="changeIndex" :currentIndex="currentIndex"></tab-control>

		<!-- 商品列表模块 -->
		<goods-list :goods="goods[titlesProp[currentIndex]]"></goods-list>
		
	</div>
</template>

<script>
// 导入顶部导航栏
import NavBar from 'components/common/NavBar/navbar.vue'
// 导入导航栏模块
import HomeSwiper from './childCompos/homeSwiper.vue'
// 导入推荐模块
import HomeRecommend from './childCompos/homeRecommend.vue'
// 导入今日流行
import HomeFeature from './childCompos/homeFeature.vue'
// 导入商品分类选项卡模块
import TabControl from 'components/content/TabControl/tabControl.vue'
// 导入商品列表模块
import GoodsList from 'components/content/GoodsList/GoodsList.vue'

// 导入网络请求模块
import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {

  name: 'home',

  data () {
    return {
    	banner:[],
    	recommend:[],
    	titles:['流行','新歌','精选'],
    	titlesProp:['pop','new','sell'],
    	goods:{
    		pop:{page:0,list:[]},
    		new:{page:0,list:[]},
    		sell:{page:0,list:[]}
    	},
    	currentIndex:0,
    }
  },
  components:{
  	NavBar,
  	HomeSwiper,
  	HomeRecommend,
  	HomeFeature,
  	TabControl,
  	GoodsList
  },
  created() {
  	this.getHomeMultidata();
  	this.getHomeGoods('pop');
  	this.getHomeGoods('new');
  	this.getHomeGoods('sell');
  },
  methods:{
  	getHomeMultidata() {
  		getHomeMultidata().then(res => {
  			this.banner.push(...res.data.banner.list)
  			this.recommend.push(...res.data.recommend.list)
  	})
  	},
  	getHomeGoods(type) {
  		const page = this.goods[type].page + 1;
  		getHomeGoods(type,page).then(res => {
  			const list = res.data.list;
  			const page = res.data.page;
  			this.goods[type].page = page;
  			this.goods[type].list.push(...list);
  		})
  	},
  	changeIndex(e) {
  		this.currentIndex = e;
      
  	}
  }
}
</script>

<style lang="css" scoped>
 .navbar {
 	 background-color:#FF8198;
 	 text-align:center;
 	 line-height:44px;
 	 color:#fff;

 }

 .home-swiper {
  padding-top:44px;
 }
</style>