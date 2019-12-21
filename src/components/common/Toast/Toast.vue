<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      isShow:false,
      message:''
    }
  },
  methods:{
    toastShow(mes,delay=1500) {
      this.message = mes;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      },delay)
    }
  }
}
</script>

<style>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index:100000;
    padding:8px 10px;
    background-color: rgba(0,0,0,.8);
  }
</style>