<template>
  <nav-bar class="nav-bar">
      <div slot="left" class="left-options" @click="fallBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center-option" v-for="(item,index) in titles" @click="titleClick(index)" :key="index">
        <span :class="{active:index == currentIndex}">{{item}}</span>
      </div>
  </nav-bar>  
</template>

<script>
import NavBar from 'components/common/NavBar/navbar.vue'
export default {
  data() {
    return {
      titles:['详情','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    titleClick(index) {
      this.currentIndex = index;
    },
    fallBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.nav-bar {
  background-color:#fff;
  /* position: fixed; */
  /* top: 0; */

}
 .left-options {
    display:table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .left-options img {
    margin-left:15px;
    height: 16px;
    width:16px;
  }
  .center-option {
    /* display: flex; */
    float:left;
    width: 25%;
    text-align: center;
    line-height: 44px;
  }
  .active {
    color:red;
  }
</style>