<template>
  <div>
  	<router-view></router-view>
  	<main-tab-bar v-show="isShow"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'

export default {
  name: 'app',
 	components:{
 		MainTabBar
	 },
	 computed:{
		 isShow() {
			 return this.$route.path.indexOf('/detail') == -1
		 }
	 }
}
</script>

<style>

</style>
