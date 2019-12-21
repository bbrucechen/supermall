<template>
	<div class="goodslist">
		
		<goods-list-item v-for="(item,index) in goods.list" class="goodslistitem" @click.native="itemClick(index)">
			<div>
			<img v-if="$route.path.indexOf('/detail') != -1" :src="item.image" alt="" slot="img">
			<img  v-else :src="item.showLarge.img" alt="">
			<p slot="p">{{item.title}}</p>
			<span slot="span" class="price">{{item.price}}</span>
			<span slot="span" class="cfav">{{item.cfav}}</span>
			</div>	
		</goods-list-item>
	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {

  name: 'GoodsList',

  data () {
    return {

    }
  },
  props:{
  	goods:{
  		type:Object,
  		default() {
  			return {}
  		}
  	}
  },
  components:{
  	GoodsListItem
	},
	methods:{
		itemClick(index) {
			this.$router.push('/detail/' + this.goods.list[index].iid);
			// console.log(this.goods.list[index].iid)
		}
	}
}
</script>

<style lang="css" scoped>
	
 	.goodslistitem {
 		width: 48%;
 		float:left;
 		text-align:center;
 		margin-bottom:4px;
 	}
 	.goodslistitem:nth-child(even) {
 		float:right;
 	}
 	.goodslistitem img {
 		width: 100%;
 		height: 300px;
 		border-radius:5px;
 	}
 	.goodslistitem p {
 		white-space:nowrap;
 		overflow:hidden;
 		text-overflow:ellipsis;
 	}
 	.goodslistitem span:first-of-type {
			padding-right:10px;
 	}
 .price {
 	color:red;
 }
</style>