<template>
	<tab-bar >
		<tab-bar-item path="/home" >
			<img src="~assets/img/tabbar/home.svg" alt="" slot="img">
			<span slot="title">首页</span>
		</tab-bar-item>
		<tab-bar-item path="/category" :isActive="false">
			<img src="~assets/img/tabbar/category.svg" alt="" slot="img">
			<span slot="title">分类</span>
		</tab-bar-item>
		<tab-bar-item path="/cart" :isActive="false"> 
			<img src="~assets/img/tabbar/cart.svg" alt="" slot="img">
			<span slot="title">购物车</span>
		</tab-bar-item>
		<tab-bar-item path="/profile" :isActive="false">
			<img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
			<span slot="title">我的</span>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar.vue'
import TabBarItem from 'components/common/TabBar/TabBarItem.vue'

export default {

  name: 'MainTabBar',

  data () {
    return {

    }
  },
  components:{
  	TabBar,
TabBarItem
  }
}
</script>

<style lang="css" scoped>
</style>