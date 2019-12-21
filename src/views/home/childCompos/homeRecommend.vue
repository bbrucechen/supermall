<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommendItem">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<span>{{item.title}}</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'homeRecommend',
  props:{
  	recommend:{
  		type:Array,
  		default() {
  			return []
  		}
  	}
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.recommend {
	display:flex;
	border-bottom: 10px solid #eee;
}
.recommendItem {
	flex:1;
	padding:12px 0 12px 0;
}
	.recommendItem a {
 		display: flex;
 		flex-direction: column;
 		align-items: center;
	}

	.recommendItem img {
		width: 54px;
		height: 54px;
		margin-bottom: 5px;
	}
</style>