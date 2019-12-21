<template>
	<div class="cart-list">
			<cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
// import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {

  name: 'CartList',

  data () {
    return {

    }
  },
  computed:{
  	...mapGetters(['cartList'])
  },
  components:{
  	CartListItem
  }
}
</script>

<style lang="css" scoped>
/* .cart-list {
	height:calc(100% - 44px - 49px - 40px);
}
.cart-content {
	height:calc(100vh - 44px - 49px);
	overflow:hidden;
} */
</style>