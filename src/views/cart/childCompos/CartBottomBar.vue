<template>
  <div class="cart-bottom-bar">
    <div class="checkButton">
      <check-button :checked="checked" @click.native="checkAll"></check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice">
      <span>
        合计:{{totalPrice.toFixed(2)}}
      </span>
    </div>
    <div class="totalCalc">
      <span>去计算({{cartLength}})</span>
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton.vue'
export default {
  props:{
    cartLength:{
      type:Number,
      default:0
    }
  },
  components:{
    checkButton
  },
  methods:{
    checkAll() {
      // this.checked = !this.checked;
      if(this.$store.state.cartList.some(value => !value.checked)) {
        this.$store.commit('checkAll');
      } else {
        this.$store.commit('cancelAll')
      }
      
    }
  },
  computed:{
    checked() {
      if(this.$store.state.cartList.length == 0) {
        return false;
      } else {
        return !this.$store.state.cartList.some(value => !value.checked)
      }
    },
    totalPrice() {
      const products = this.$store.state.cartList;
      if(products.length == 0) {
        return 0
      } else {
        let price = 0;
        products.forEach(value => {
          if(value.checked) {
            price += value.count * value.price
          }
        })
        return price;
      }
    }
  }
}
</script>

<style>
  .cart-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    /* background-color:red; */
    display: flex;
    bottom:49px;
    height:40px;
    background-color:#eee;
  }

  .checkButton {
    width: 80px;
    height: 40px;
    float:left;
    text-align: center;
    /* line-height: 40px; */
    margin-top:11px;
  }
  .checkButton span {
    float:left;
  }

  .checkButton img {
    width: 20px;
    height: 20px;
  }

  .checkButton .check-button {
    width: 22px;
    height: 22px;
    float:left;
  }
  .totalPrice {
    width: 150px;
    line-height: 40px;
  }

  .totalCalc {
    background-color:red;
    flex:1;
    line-height: 40px;
    color:#fff;
    padding-left: 10px;
  }
</style>