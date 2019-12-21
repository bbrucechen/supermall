<template>
	<div>
    <cart-nav-bar class="cart-nav-bar">
      <span slot="center">购物车({{cartLength}})</span>
    </cart-nav-bar>
		<cart-list class="cart-list"></cart-list>
    <cart-bottom-bar :cartLength="cartLength"></cart-bottom-bar>
	</div>
</template>

<script>
import cartList from './childCompos/CartList.vue'
import cartNavBar from 'components/common/NavBar/navbar.vue'
import cartBottomBar from './childCompos/CartBottomBar.vue'
export default {

  name: 'cart',

  data () {
    return {

    }
  },
  components:{
    cartList,
    cartNavBar,
    cartBottomBar
  },
  computed:{
    cartLength() {
      return this.$store.state.cartList.filter((value) => {
        return value.checked == true
      }).length
    }
  }
}
</script>

<style lang="css" scoped>
  .cart-nav-bar {
    height:100%;
    height:44px;
    background-color:var(--color-tint);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 44px;
    color:#fff;
  }
  .cart-list {
    position: relative;
    top: 44px;
  }
</style>